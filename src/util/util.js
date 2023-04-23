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
    console.error(text)
}