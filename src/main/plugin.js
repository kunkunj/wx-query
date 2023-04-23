export const plugin = fns => {
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
    fn.prototype.plugins = {}
    fn.plugins = {}
  }
  