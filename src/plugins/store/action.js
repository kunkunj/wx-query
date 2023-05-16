export const actionCrotrol = function (actions, store) {
  const state = store._state;
  let acs ={};
  for (const key in actions) {
    acs[key] = actions[key].bind(state);
    store[key] = acs[key]
  }
  store.actions = acs;
};
