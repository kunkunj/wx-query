const {
  WxRequest,
  WxComponet,
  createStore
} = require('../../sdk/index.js')
import {
  store
} from '../../store/index.js'
WxComponet.init({
  Store: [store],
  methods: {}
})