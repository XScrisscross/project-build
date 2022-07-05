export const getDomWidth = (node) => {
  return node.offsetWidth
}

export const setDomWidth = (node,width) => {
  return node.style.width = width + 'px'
}