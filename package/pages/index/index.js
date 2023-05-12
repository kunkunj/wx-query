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
router.testpush()
wxPage.use([WxRequest])
console.log(wxPage)
wxPage.init({
  $keyName: '$query',
  data: {},
  observeData: {
    form: {
      a: 1,
      b: 2,
      c: 3
    },
    arr:['1'],
    num: 12
  },
  onLoad() {
    console.log(wxPage.getPages(), '--------------')
    console.log(getCurrentPages())
  },
  add() {
    this.observeData.form.c += 100
    console.log(this.observeData, this.data)
  },
  addArray(){
    this.observeData.arr.push('2')
  },
  popArray(){
    this.observeData.arr.pop()
  },
  shiftArray(){
    this.observeData.arr.shift()
  },
  unshiftArray(){
    this.observeData.arr.unshift(1)
  },
  navto() {
    router.navigateTo({
      url: '/pages/log/log'
    })
  },
  shuchu() {
    console.log(this.data, this.observeData)
  },
})