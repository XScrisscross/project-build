/**
 * 替换换行符
 */
export const replaceToBr = (str) => {
  if (!str) return ''
  return str.replace(/\n/g, '<br/>')
}