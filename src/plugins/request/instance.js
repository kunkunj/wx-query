import { InterceptorManager } from './interceptor';

export function Instance(options) {
  this.baseURL = options.baseURL || '';
  this.timeout = options.timeout || 10000;
  this.headers = options.headers || {};
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  };
}
Instance.prototype.install = function (vm) {
  vm.plugins.$request = this;
};

Instance.prototype.request = function (options) {
  let config = options || {};
  let len = this.interceptors.request.handlers.length;
  let i = 0;
  while (i < len) {
    try {
      config = this.interceptors.request.handlers[i].success(options);
    } catch (error) {
      this.interceptors.request.handlers[i].fail(error);
      break;
    }
    i++;
  }
  let _this = this;
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      url: this.baseURL ? this.baseURL + config.url : config.url,
      timeout: config.timeout ? config.timeout : this.timeout,
      headers: config.headers ? config.headers : this.headers,
      success(result) {
        let response = result;
        let len = _this.interceptors.response.handlers.length;
        let i = 0;
        while (i < len) {
          if (/2\d+/.test(result.statusCode)) {
            response = _this.interceptors.response.handlers[i].success(result);
          } else {
            response = _this.interceptors.response.handlers[i].fail(result);
          }
          i++;
        }
        if (/2\d+/.test(result.statusCode)) {
          resolve(response);
        } else {
          reject(response);
        }
      },
      fail(error) {
        reject(error);
      },
    });
  });
};
