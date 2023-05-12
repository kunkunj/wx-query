export function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function (success, fail) {
  this.handlers.push({
    success,
    fail,
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function (id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager.prototype.clear = function () {
  if (this.handlers) {
    this.handlers = [];
  }
};
