// index.js
// 获取应用实例
const {
  wxPage,
  WxRequest
} = require('../../sdk/index.js')
wxPage.use([WxRequest])
wxPage.init({
  sup: 'we',
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