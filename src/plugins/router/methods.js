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
    }
  };
  Router.prototype.switchTab = function (obj) {
    let _this = this
    this.updateStack(obj)
    Router.hooksQuee.execute();
    if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
      warning('beforeEach hook need to execute next');
      return;
    }
    if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
      wx.switchTab({
        ...obj,
        complete: function (e) {
          _this.isWatchRouter && Router.hooksQuee.reset();
          obj?.complete?.call(wx, e);
        },
      });
    }
  };
  Router.prototype.reLaunch = function (obj) {
    let _this = this
    this.updateStack(obj)
    Router.hooksQuee.execute();
    if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
      warning('beforeEach hook need to execute next');
      return;
    }
    if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
      wx.reLaunch({
        ...obj,
        complete: function (e) {
          _this.isWatchRouter && Router.hooksQuee.reset();
          obj?.complete?.call(wx, e);
        },
      });
    }
  };
  Router.prototype.redirectTo = function (obj) {
    let _this = this
    this.updateStack(obj)
    Router.hooksQuee.execute();
    if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
      warning('beforeEach hook need to execute next');
      return;
    }
    if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
      wx.redirectTo({
        ...obj,
        complete: function (e) {
          _this.isWatchRouter && Router.hooksQuee.reset();
          obj?.complete?.call(wx, e);
        },
      });
    }
  };
  Router.prototype.navigateTo = function (obj) {
    let _this = this
    console.log(this)
    this.updateStack(obj)
    Router.hooksQuee.execute();
    if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
      warning('beforeEach hook need to execute next');
      return;
    }
    if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
      wx.navigateTo({
        ...obj,
        success: function (e) {
          console.log(e)
          obj?.success?.call(wx, e);
        },
        complete: function (e) {
          _this.isWatchRouter && Router.hooksQuee.reset();
          obj?.complete?.call(wx, e);
        },
      });
    }
  };
  Router.prototype.navigateBack = function (obj) {
    let _this = this
    this.updateStack(obj)
    Router.hooksQuee.execute();
    if (Router.hooksQuee.isExcute() && this.isWatchRouter) {
      warning('beforeEach hook need to execute next');
      return;
    }
    if (!Router.hooksQuee.isExcute() || !this.isWatchRouter) {
      wx.navigateBack({
        ...obj,
        complete: function (e) {
          _this.isWatchRouter && Router.hooksQuee.reset();
          obj?.complete?.call(wx, e);
        },
      });
    }
  };
};
