import { Dep } from './dep';
export function loadStore(options, vm) {
  if (options.Store && options.Store.length) {
    if (options.Store.constructor.name !== 'Array') {
      error('Store must a array');
      return;
    }
    vm.updateStoreState = function (name, value) {
      vm.setData({
        [name]: value,
      });
    };
    for (let index = 0; index < options.Store.length; index++) {
      options.Store[index].init(vm);
      Dep.pushDep(options.Store[index].id, vm);
    }
  }
}
