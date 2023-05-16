import { error, isEmpty } from '../util/util';
import { loadStore } from './loadStore';
import { observe } from './observer';

export const initComponet = fns => {
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
  let fn = options?.lifetimes?.ready ? options.lifetimes.ready : null;
  fn = fn ? fn : options?.ready ? options?.ready : null;
  if (options?.ready) {
    options.ready = function () {
      loadStore(options, this);
      this.createDataKey = observe;
      if (options.observeData) {
        this.observeData = options.observeData;
        this.createDataKey(options.observeData, 'observeData', this, 'observeData');
      }
      if (fn) {
        fn.call(this);
      }
    };
  } else {
    options.lifetimes = options.lifetimes || {};
    options.lifetimes.ready = function () {
      loadStore(options, this);
      this.createDataKey = observe;
      if (options.observeData) {
        this.observeData = options.observeData;
        this.createDataKey(options.observeData, 'observeData', this, 'observeData');
      }
      if (fn) {
        fn.call(this);
      }
    };
  }
  Component(options);
}