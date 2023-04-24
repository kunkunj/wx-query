import { beforeEach, initQueeHook } from './beforeEach';
import { initMethods } from './methods';

export function Router() {
  this.isWatchRouter = false;
}
Router.stack = {
  currentPage: null,
  lastPage: null,
  routes: [],
};
initQueeHook(Router);
beforeEach(Router);
initMethods(Router);
Router.prototype.updateStack = function (obj) {
  Router.stack.lastPage = getCurrentPages() && getCurrentPages().length && getCurrentPages()[0].route;
  Router.stack.currentPage = obj.url;
};
