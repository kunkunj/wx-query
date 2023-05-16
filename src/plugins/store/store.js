import { Dep } from '../../main/dep';
import { actionCrotrol } from './action';
import { getterCrotrol } from './getter';
import { stateCrotrol } from './state';

export function Store(id, options) {
  this.id = id;
  const { getters, actions, state } = options;
  stateCrotrol(state, this);
  getterCrotrol(getters, this);
  actionCrotrol(actions, this);
  observeState(this._state, '$store$$' + this.id, this);
}
Store.prototype.init = function (vm) {
  flatState(this._da, '$store$$' + this.id, vm);
  return Dep.has(this.id, vm);
};
function observeState(object, sup, store) {
  for (const key in object) {
    if (object[key] && object[key].constructor.name == 'Object') {
      observeState(object[key], sup + '$$' + key, store);
    } else {
      if (object[key].constructor.name == 'Array') {
        setArrayFn(object[key], store, sup, key, val);
      } else {
        Object.defineProperty(object, key, {
          set(val) {
            setStore(store, sup, key, val);
          },
          get() {
            return store[sup + '$$' + key];
          },
        });
      }
    }
  }
}
export function setStore(store, sup, key, val) {
  store[sup + '$$' + key] = val;
  getterCrotrol(store.gettersMethod, store);
  Dep.watch(sup + '$$' + key, val, store.id);
  let arr = (sup + '$$' + key).split('$$');
  if (arr.length == 3) {
    if (store._da[arr[2]] !== val) {
      store._da[arr[2]] = val;
    }
    return;
  }
  let obj = {};
  for (let index = 2; index < arr.length; index++) {
    if (index < arr.length - 1) {
      obj = store._da[arr[index]];
    } else {
      if (obj[key] !== val) {
        obj[key] = val;
      }
    }
  }
}
function flatState(object, sup, vm) {
  for (const key in object) {
    if (object[key] && object[key].constructor.name == 'Object') {
      flatState(object[key], sup + '$$' + key, vm);
    } else {
      vm.setData({
        [sup + '$$' + key]: object[key],
      });
    }
  }
}

const setArrayFn = function (target, store, sup, key, val) {
  target.push = function (...args) {
    Array.prototype.push.call(target, ...args);
    setStore(store, sup, key, val);
  };
  target.pop = function (...args) {
    Array.prototype.pop.call(target, ...args);
    setStore(store, sup, key, val);
  };
  target.shift = function (...args) {
    Array.prototype.shift.call(target, ...args);
    setStore(store, sup, key, val);
  };
  target.unshift = function (...args) {
    Array.prototype.unshift.call(target, ...args);
    setStore(store, sup, key, val);
  };
  target.concat = function (...args) {
    Array.prototype.concat.call(target, ...args);
    setStore(store, sup, key, val);
  };
};
