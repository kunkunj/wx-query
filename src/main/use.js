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
    if (Array.isArray(plugins)) {
      plugins.map(item => {
        item.install?.call(null, fn);
      });
    } else {
      plugins.install?.call(null, fn);
    }
    return fn;
  };
  fn.use = function (plugins) {
    if (Array.isArray(plugins)) {
      plugins.map(item => {
        item.install?.call(null, fn);
      });
    } else {
      plugins.install?.call(null, fn);
    }
    return fn;
  };
}
