import Vue from 'vue';
import { isString, isObject } from './types';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export function noop() {}

// fn:对象是否拥有某属性
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

// fn:对象扩展对象_from
function extend(to, _from) {
  for (let key in _from) {
    to[key] = _from[key];
  }
  return to;
}

// fn:对象扩展对象_from
export function toObject(arr) {
  var res = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

// fn:路径取值 {a:{b:{}}} a.b => {} 取v
export const getValueByPath = function (object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

// fn:路径取值 {a:{b:{}}} a.b => {K:b,o:...v:{}} 取k v
export function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  let keyArr = path.split('.');
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    let key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
  };
}

// fn:生成可重复随机id[0,10000]
export const generateId = function () {
  return Math.floor(Math.random() * 10000);
};

// fn:比较基础数据类型、引用地址、及一维数组的基础数据类型、引用地址
export const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

// fn:将字符串、数字转为正则表达式，对特数字符转义处理
// new RegExp(escapeRegexpString('$^1212'), 'i').test('$^1212121212') /\$1212/i
export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

// TODO: use native Array.find, Array.findIndex when IE support is dropped
// fn:在数组中找出符合预备函数执行正确的数组的索引
export const arrayFindIndex = function (arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

// fn:在数组中找出符合预备函数执行正确的数组的值
export const arrayFind = function (arr, pred) {
  const idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
// fn:合法值转数组
export const coerceTruthyValueToArray = function (val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

// fn:判断是否isIE
export const isIE = function () {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode));
};

// fn:判断是否isEdge
export const isEdge = function () {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

// fn:判断是否isFirefox
export const isFirefox = function () {
  return !Vue.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};

// fn:添加css前缀
export const autoprefixer = function (style) {
  if (typeof style !== 'object') return style;
  const rules = ['transform', 'transition', 'animation'];
  const prefixes = ['ms-', 'webkit-'];
  rules.forEach(rule => {
    const value = style[rule];
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};

// fn:驼峰转小横杠
export const kebabCase = function (str) {
  const hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

// fn:首字母大写
export const capitalize = function (str) {
  if (!isString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// fn:字符串序列是否相等
export const looseEqual = function (a, b) {
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

// fn:序列化数组是否相等
export const arrayEquals = function (arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

// fn:序列化值是否相等
export const isEqual = function (value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};

// fn:判断控制 null undefined 0 [] {} '' File Map Set 
export const isEmpty = function (val) {
  // null or undefined
  if (val == null) return true;

  if (typeof val === 'boolean') return false;

  if (typeof val === 'number') return !val;

  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size;
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length;
    }
  }

  return false;
};

// fn:逐帧调用改单词调用
export function rafThrottle(fn) {
  let locked = false;
  return function (...args) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(_ => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

// fn:对象转数组对象
export function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }
  return isEmpty(obj) ? [] : [obj];
}
