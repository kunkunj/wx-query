import { warning } from '../../util/util';
export const initMethods = Router => {
  Router.prototype.testpush = function (obj) {
    Router.hooksQuee.execute();
    if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
      warning('beforeEach hook need to execute next');
      return;
    }
    if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
      this.isWatchRouter && Router.hooksQuee.reset();
      console.log('执行成功', Router.hooksQuee);
    }
  };
  Router.prototype.switchTab = function (obj) {
    Router.hooksQuee.execute();
    if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
      warning('beforeEach hook need to execute next');
      return;
    }
    if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
      wx.switchTab({
        ...obj,
        complete: function (e) {
          this.isWatchRouter && Router.hooksQuee.reset();
          obj?.complete?.call(wx, e);
        },
      });
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
};
