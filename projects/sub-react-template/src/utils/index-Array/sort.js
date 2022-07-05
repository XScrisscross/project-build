export const addActiveFirst = (objArr) => {
  return objArr.map((item, index) => {
    return index === 0 ? { ...item, active: true } : { ...item, active: false }
  })
}

export const sortByFiled = (objArr, filed, rule = 'asc') => {
  for (let i = 0; i < objArr.length - 1; i++) {
    for (let j = 0; j < objArr.length - i - 1; j++) {
      let before = Number(objArr[j][filed])
      let after = Number(objArr[j + 1][filed])

      if (objArr[j][filed] < objArr[j + 1][filed]) {
        let temp = objArr[j]
        objArr[j] = objArr[j + 1]
        objArr[j + 1] = temp
      }
    }
  }

  if (rule === 'des') return objArr.reserve()
  return objArr
}
