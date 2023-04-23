function Request() {}
Request.prototype.instance = function () {};

export const WxRequest = {
  install(vm) {
    console.log(vm)
    vm.plugins.$request = Request;
  },
};
