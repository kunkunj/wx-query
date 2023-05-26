import { store } from '../../store/index'
const { wxPage,WxRequest } = require('../../sdk/index.js')
wxPage.use(WxRequest)
wxPage.init({
    Store:[store],
    onLoad(){
      this.$.$request({url:'https://www.isqqw.com/viewer?id=38151'})
    },
    changeStore(){
        store.changeName()
    }
})