import { error } from '../../util/util';
class HooksQuee {
  quees = [];
  isExcute() {
    return this.quees.find(item => !item.nextPage);
  }
  reset() {
    this.quees.map(item => {
      item.reset();
    });
  }
  execute() {
    this.quees.map(item => {
      item.execute();
    });
  }
}
export function initQueeHook(Router) {
    Router.hooksQuee = new HooksQuee();
}

function initQuee(cb, vm) {
  let nextPage = false;
  let fn = cb;
  function next() {
    this.nextPage = true;
  }
  function reset() {
    this.nextPage = false;
  }
  function execute() {
    this.fn(vm.stack.lastPage, vm.stack.currentPage, this.next.bind(this));
  }
  return {
    nextPage,
    reset,
    fn,
    execute,
    next,
  };
}
export const beforeEach = Router => {
  Router.prototype.beforeEach = function (cb) {
    if (typeof cb !== 'function') {
      error('beforeEach arg not a function');
    }
    this.isWatchRouter = true;
    Router.hooksQuee.quees.push(initQuee(cb, Router));
  };
};