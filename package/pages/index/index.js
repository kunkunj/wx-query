// index.js
// 获取应用实例
import { wxPage } from '../../sdk/wx-simple.min'

console.dir(wxPage)

wxPage.init({
  sup: 'we',
  data: {},
  observeData: {
    form: {
      a: 1,
      b: 2,
      c: 3
    },
    num:12
  },
  onReady(){
    // console.log(1)
  },
  add(){
    this.observeData.form.c += 100
    console.log(this.observeData)
  },
  shuchu() {
    console.log(this.data,this.observeData)
  },
})
