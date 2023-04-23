export const isEmpty = params => {
  if (typeof params !== 'object') {
    return true;
  }
  return !Object.keys(params).length
};
