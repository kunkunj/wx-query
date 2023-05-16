// app.js
const {
  WxRouter
} = require('./sdk/index.js')
const router = WxRouter()
router.beforeEach((from, to, next) => {
  console.log(from, to, '333')
  next()
})
App({
  onLaunch() {},
  globalData: {
    id:1
  }
})