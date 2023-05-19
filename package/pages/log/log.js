// index.js
const {
  wxPage,WxRequest
} = require('../../sdk/index.js')
const requestInstance = WxRequest.create({baseURL:'https://blog.csdn.net/'})
console.log(requestInstance)

// 构造page
wxPage.init({
  observeData: {
    arr: [1, 2]
  },
  push() {
    this.observeData.arr.push('2')
  },
  pop() {
    this.observeData.arr.pop()
  },
  shift() {
    this.observeData.arr.shift()
  },
  unshift() {
    this.observeData.arr.unshift()
  },
  onLoad() {
    WxRequest({url:'https://blog.csdn.net/'}).then(res => {
      console.log(res,2)
    })
    requestInstance.request().then(res => {
      console.log(res,2)
    })
  },
})