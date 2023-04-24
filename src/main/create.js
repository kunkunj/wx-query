export const create = fns => {
  if (Array.isArray(fns)) {
    fns.map(item => {
      set(item);
    });
  }
  if (typeof fns == 'function') {
    set(fns);
  }
};
function set(fn) {
  fn.prototype.create = function () {
    return new fn();
  };
  fn.create = function () {
    return new fn();
  };
  fn.pages = []
  fn.getPages = function () {
    return this.pages
  }
}
