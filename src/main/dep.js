import { error } from '../util/util';

export function Dep() {}
Dep.data = {};
Dep.addDep = function (id) {
  Dep.data[id] = [];
};
Dep.pushDep = function (id, target) {
  if (!Dep.data[id]) {
    error('Store ' + id + ' is not create');
    return;
  }
  const index = Dep.data[id].findIndex(dep => dep.is == target.is);
  if (index > -1) {
    Dep.data[id].splice(index, 1, target);
  } else {
    Dep.data[id].push(target);
  }
  return id + (Dep.data[id].length - 1);
};
Dep.watch = function (key, value, id) {
  const deps = Dep.data[id];
  deps.map(vm => {
    vm.updateStoreState(key, value);
  });
};
Dep.has = function (id, vm) {
  const deps = Dep.data[id];
  return !!deps.find(dep => dep.is == vm.is);
};
