export const use = fns => {
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
  fn.prototype.use = function (plugins) {
    if (Array.isArray(fn)) {
      plugins.map(item => {
        item.install?.call(this);
      });
    } else {
      plugins.install?.call(this);
    }
    return this;
  };
  fn.use = function (plugins) {
    if (Array.isArray(fn)) {
      plugins.map(item => {
        item.install?.call(this);
      });
    } else {
      plugins.install?.call(this);
    }
    return this;
  };
}
