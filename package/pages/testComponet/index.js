const {
  WxRequest,
  WxComponet,
  createStore
} = require('../../sdk/index.js')
import { store } from '../../store/index.js'
const app =getApp()

WxComponet.init({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  Store:[store],
  /**
   * 组件的初始数据
   */
  data: {
    iiii:app.globalData.id
  },
  observeData: {
    form: {
      a: 1,
      b: 2,
      c: 3
    },
    arr: ['1'],
    num: 12
  },
  ready(){
    console.log(this)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    nav(){
  wx.navigateTo({
    url: '../index/index',
  })
    },
    action(){
      store.changeName()
    },
    shuchu() {
      console.log(this)
      console.log(this.data)
    },
    add() {
      this.observeData.form.c += 100
    },
    addArray() {
      this.observeData.arr.push('2')
      store.push()
    },
    popArray() {
      this.observeData.arr.pop()
      store.pop()
    },
    shiftArray() {
      this.observeData.arr.shift()
      store.shift()
    },
    unshiftArray() {
      this.observeData.arr.unshift(1)
      store.unshift()
    },
  }
})