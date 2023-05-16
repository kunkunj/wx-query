export const getterCrotrol = function (getters, store) {
  const state = store._state;
  const ac = {};
  for (const key in getters) {
    ac[key] = getters[key].call(store, state);
  }
  store.getters = ac;
  store.gettersMethod = getters
};
