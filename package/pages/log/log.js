const app = getApp()
Page({
  data: {
    iiii: app.globalData.id
  },
  onLoad() {
    setTimeout(() => {
      app.globalData.id = 2222
    }, 2000);
  }
})