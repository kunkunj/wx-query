import { error } from '../util/util';

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
    try {
      if (Array.isArray(plugins)) {
        plugins.map(item => {
          item.install(fn);
        });
      } else {
        plugins.install(fn);
      }
    } catch (e) {
      error('plugin need a install function');
    }
    return fn;
  };
  fn.use = function (plugins) {
    try {
      if (Array.isArray(plugins)) {
        plugins.map(item => {
          item.install(fn);
        });
      } else {
        plugins.install(fn);
      }
    } catch (e) {
      error('plugin need a install function');
    }
    return fn;
  };
}
