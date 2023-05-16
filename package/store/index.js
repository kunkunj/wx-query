const {
  createStore
} = require('../sdk/index.js')
export const store = createStore('user', {
  state: () => ({
    name: 'jack',
    list: [1, 2, 3, 4]
  }),
  getters: {
    getNAme(state) {
      return state.name + '111'
    }
  },
  actions: {
    changeName() {
      this.name = this.name == 'tom' ? 'jack' : 'tom'
    },
    push() {
      this.list = [1, 2, 3, 4, 5, 6]
    },
    pop() {
      this.list.pop()
    },
    shift() {
      this.list.shift()
    },
    unshift() {
      this.list.unshift('unshift')
    }
  }
})