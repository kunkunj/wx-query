// app.js
const {
  WxRouter
} = require('./sdk/index.js')
const router = WxRouter()
router.beforeEach((from, to, next) => {
  console.log('333')
  next()
})
App({
  onLaunch() {},
  globalData: {}
})