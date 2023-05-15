const {
  WxRequest,
  WxComponet
} = require('../../sdk/index.js')

WxComponet.init({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  observeData: {
    form: {
      a: 1,
      b: 2,
      c: 3
    },
    arr:['1'],
    num: 12
  },
  /**
   * 组件的方法列表
   */
  methods: {
    shuchu(){
      console.log(this)
      console.log(this.data)
    },
    add() {
      this.observeData.form.c += 100
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
  }
})