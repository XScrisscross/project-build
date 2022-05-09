// compose 实现
// fns:[] 事件序列  source:源数据
// 方案一 递归
// const compose = (...fns) => (source) => {
//   const fnf = fns.shift()
//   if (fnf) {
//     return compose(...fns)(fnf(source))
//   }
//   return source
// }

// 方案二 reduce
const compose = (...fns) => (source) => {
  return fns.reduce((res, cur) => {
    return cur(res)
  }, source)
}

export { compose };