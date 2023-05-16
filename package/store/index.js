const {
  createStore
} = require('../sdk/index.js')
export const store = createStore('user', {
  state: () => ({
    name: 'jack'
  }),
  getters: {
    getNAme(state) {
      return state.name + '111'
    }
  },
  actions: {
    changeName() {
      this.name = this.name == 'tom' ? 'jack' : 'tom'
    }
  }
})