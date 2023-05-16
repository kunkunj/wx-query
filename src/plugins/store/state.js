import { cloneDeep, error } from '../../util/util';

export const stateCrotrol = function (state, store) {
  if (!state) {
    error('state is need in Stroe options');
  }
  if (typeof state !== 'function') {
    error('state not is a function');
  }
  store._da = state()
  store._state = state();
  store.stateMoudle = state
};
