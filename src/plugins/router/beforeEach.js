import { error } from '../../util/util';

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
    Router.hooksQuee.quees.push(initQuee(cb, this));
  };
};
