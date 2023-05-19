import { store } from '../../store/index'
const { wxPage } = require('../../sdk/index.js')

wxPage.init({
    Store:[store],
    changeStore(){
        store.changeName()
    }
})