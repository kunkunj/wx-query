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
const requestInstance = WxRequest.create({baseURL:'https://blog.csdn.net/'})
wxPage.use(WxRequest)
console.dir(WxRequest)
WxRequest.interceptors.response.use(function(response){
  console.log(111222)
  return {a:1}
},function(error){
  return Promise.reject(1)
})
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
    console.dir(this)
    this.$query.$request({url:'https://blog.csdn.net/'}).then(res => {
      console.log(res,2)
    })
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