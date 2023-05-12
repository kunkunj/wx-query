import { Instance } from "./instance";

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
  fn.create = function (options) {
    return new Instance(options)
  };
}
