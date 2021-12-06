const isString = function (val) {
  return Object.prototype.toString.call(val).toLowerCase() === '[object string]';
};

const isObject = function (val) {
  return Object.prototype.toString.call(val).toLowerCase() === '[object object]';
};

const isArray = function (val) {
  return Object.prototype.toString.call(val).toLowerCase() === '[object array]';
};

const isObjectArr = function (val) {
  if (isArray(val) && val.length > 0) {
    return val.every(obj => isObject(obj));
  }
  return false;
};

export { isString, isObject, isArray, isObjectArr };
