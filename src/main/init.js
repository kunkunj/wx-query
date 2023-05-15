import { isEmpty } from '../util/util';
import { setArrayFn } from './format';

export const init = (fns) => {
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
  options.onReady && options.onReady();
  options.onReady = function () {
    if (this.observeData) {
      this.createDataKey(options.observeData, 'observeData', this, 'observeData');
    }
  };
  Page(options);
}
function observe(object, sup, vm, parent) {
  console.log(vm.createDataKey);
  for (const key in object) {
    if (object[key].constructor.name == 'Object') {
      vm.createDataKey(object[key], sup + '$$' + key, vm, parent + '.' + key);
    } else {
      if (object[key].constructor.name == 'Array') {
        setArrayFn(object[key], vm, sup + '$$' + key);
      }
      vm.setData({
        [sup + '$$' + key]: object[key],
      });
      Object.defineProperty(vm.data, sup + '$$' + key, {
        set(val) {
          let arr = (sup + '$$' + key).split('$$');
          if (arr.length == 2) {
            if (vm.observeData[arr[1]] !== val) {
              vm.observeData[arr[1]] = val;
            }
            return;
          }
          let obj = {};
          for (let index = 1; index < arr.length; index++) {
            if (index < arr.length - 1) {
              obj = vm.observeData[arr[index]];
            } else {
              if (obj[key] !== val) {
                obj[key] = val;
              }
            }
          }
        },
        get() {
          return object[key];
        },
      });
      let keys = parent.split('.');
      let observeObj = vm;
      keys.map(item => {
        observeObj = observeObj[item];
      });
      object['_' + key] = object[key];
      Object.defineProperty(observeObj, key, {
        set(val) {
          object['_' + key] = val;
          vm.setData({
            [sup + '$$' + key]: val,
          });
        },
        get() {
          return object['_' + key];
        },
      });
    }
  }
}
