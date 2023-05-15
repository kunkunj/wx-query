import { create } from './create';
import { requestInstance } from './instance';
import { InterceptorManager } from './interceptor';
WxRequest.interceptors = {
  request: new InterceptorManager(),
  response: new InterceptorManager(),
};
WxRequest.defaultConfig = {}

export function WxRequest(options) {
  let _this = {
    ...WxRequest.defaultConfig,
    interceptors: WxRequest.interceptors,
  };
  return requestInstance.call(_this, options);
}
WxRequest.install = function (vm) {
  vm.plugins.$request = WxRequest;
};

create(WxRequest);
