// index.js
// 获取应用实例
const {
  wxPage,
  WxRequest,
  WxRouter
} = require('../../sdk/index.js')
const router = WxRouter()
router.beforeEach((from, to, next) => {
  console.log('1111')
  next()
})
router.switchTab()
wxPage.use([WxRequest])
wxPage.init({
  $keyName: '$query',
  data: {},
  observeData: {
    form: {
      a: 1,
      b: 2,
      c: 3
    },
    num: 12
  },
  onReady() {
    console.log(this.$query)
  },
  add() {
    this.observeData.form.c += 100
    console.log(this.observeData)
  },
  shuchu() {
    console.log(this.data, this.observeData)
  },
})