function Request() {}
Request.prototype.instance = function () {};

export const WxRequest = {
  install(vm) {
    vm.plugins.$request = Request;
  },
};
