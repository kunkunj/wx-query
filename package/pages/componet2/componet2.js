const {
  WxRequest,
  wxComponet,
  createStore
} = require('../../sdk/index.js')
import {
  store
} from '../../store/index.js'
wxComponet.init({
  Store: [store],
  methods: {}
})