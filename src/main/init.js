import { error, isEmpty } from '../util/util';
import { loadStore } from './loadStore';
import { observe } from './observer';

export const init = fns => {
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
  fn.prototype.init = instance;
  fn.init = instance;
}
function instance(options) {
  if (options.createDataKey) {
    throw new Error('请不要取名createDataKey');
  }
  if (!isEmpty(this.plugins)) {
    if (options.$keyName) {
      options[options.$keyName] = this.plugins;
    } else {
      options.$ = this.plugins;
    }
  }
  options.createDataKey = observe;
  let fn = options.onReady ? options.onReady : null;
  options.onReady = function () {
    loadStore(options, this);
    if (fn) {
      fn.call(this);
    }
    if (this.observeData) {
      this.createDataKey(options.observeData, 'observeData', this, 'observeData');
    }
  };
  Page(options);
}
