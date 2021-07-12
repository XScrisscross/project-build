export const transErrorsTo = (val, res) => {
  if (
    val === '' ||
    val === undefined ||
    val === false ||
    val === '0' ||
    val === null
  ) {
    return 0
  }
  return val
}