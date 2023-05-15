export const setArrayFn = function (target, vm, key) {
  target.push = function (...args) {
    Array.prototype.push.call(target, ...args);
    vm.setData({
      [key]: target,
    });
  };
  target.pop = function (...args) {
    Array.prototype.pop.call(target, ...args);
    vm.setData({
      [key]: target,
    });
  };
  target.shift = function (...args) {
    Array.prototype.shift.call(target, ...args);
    vm.setData({
      [key]: target,
    });
  };
  target.unshift = function (...args) {
    Array.prototype.unshift.call(target, ...args);
    vm.setData({
      [key]: target,
    });
  };
  target.concat = function (...args) {
    Array.prototype.concat.call(target, ...args);
    vm.setData({
      [key]: target,
    });
  };
};