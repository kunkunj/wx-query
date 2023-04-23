
import { beforeEach, initQueeHook } from './beforeEach';
import { initMethods } from './methods';

export function Router() {
  this.stack = {
    currentPage: null,
    lastPage: null,
    routes: [],
  };
  this.isWatchRouter = false;
}
initQueeHook(Router)
beforeEach(Router);
initMethods(Router)
Router.prototype.updateStack = function () {};
