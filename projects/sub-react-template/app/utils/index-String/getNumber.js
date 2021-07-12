// 提取数字
export const getNumberByStr = (str) => {
  if (!str) return 0
  return Number(str.replace(/[^0-9]/ig, ""))
}