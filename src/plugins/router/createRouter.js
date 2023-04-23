import { warning } from '../../util/util';
import { beforeEach } from './beforeEach';

export function Router() {
  this.stack = {
    currentPage: null,
    lastPage: null,
    routes: [],
  };
  this.isWatchRouter = false;
}
beforeEach(Router)
Router.hooksQuee = {
  quees: [],
  isExcute() {
    return this.quees.find(item => !item.nextPage);
  },
  reset() {
    this.quees.map(item => {
      item.reset();
    });
  },
  execute() {
    this.quees.map(item => {
      item.execute();
    });
  },
};
Router.prototype.updateStack = function () {};
Router.prototype.switchTab = function (obj) {
  Router.hooksQuee.execute();
  if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
    warning('beforeEach hook need to execute next');
    return;
  }
    if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
      console.log('执行成功')
      this.isWatchRouter && Router.hooksQuee.reset();
    // wx.switchTab({
    //   ...obj,
    //   complete: function (e) {
    //     this.isWatchRouter && Router.hooksQuee.reset();
    //     obj?.complete?.call(wx, e);
    //   },
    // });
  }
};
Router.prototype.reLaunch = function (obj) {
  Router.hooksQuee.execute();
  if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
    warning('beforeEach hook need to execute next');
    return;
  }
  if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
    wx.reLaunch({
      ...obj,
      complete: function (e) {
        this.isWatchRouter && Router.hooksQuee.reset();
        obj?.complete?.call(wx, e);
      },
    });
  }
};
Router.prototype.redirectTo = function (obj) {
  Router.hooksQuee.execute();
  if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
    warning('beforeEach hook need to execute next');
    return;
  }
  if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
    wx.redirectTo({
      ...obj,
      complete: function (e) {
        this.isWatchRouter && Router.hooksQuee.reset();
        obj?.complete?.call(wx, e);
      },
    });
  }
};
Router.prototype.navigateTo = function (obj) {
  Router.hooksQuee.execute();
  if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
    warning('beforeEach hook need to execute next');
    return;
  }
  if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
    wx.navigateTo({
      ...obj,
      complete: function (e) {
        this.isWatchRouter && Router.hooksQuee.reset();
        obj?.complete?.call(wx, e);
      },
    });
  }
};
Router.prototype.navigateBack = function (obj) {
  Router.hooksQuee.execute();
  if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
    warning('beforeEach hook need to execute next');
    return;
  }
  if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
    wx.navigateBack({
      ...obj,
      complete: function (e) {
        this.isWatchRouter && Router.hooksQuee.reset();
        obj?.complete?.call(wx, e);
      },
    });
  }
};
