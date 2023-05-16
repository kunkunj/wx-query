export const isEmpty = params => {
  if (typeof params !== 'object') {
    return true;
  }
  return !Object.keys(params).length;
};
export const warning = function (text) {
  console.warn(text);
};
export const error = function (text) {
  console.error(text);
};
export const cloneDeep = function (obj = {}) {
  let newobj = null;
  if (typeof obj == 'object' && obj !== null) {
    newobj = obj instanceof Array ? [] : {};
    for (var i in obj) {
      newobj[i] = copyObj(obj[i]);
    }
  } else newobj = obj;
  return newobj;
};
