export default (store) => (next) => (action) => {
  const {
    payload: { data, promise, success, error },
  } = action
  if (!promise) return next(action)

  return promise
    .then((res) => {
      action.payload.data = res.data
      next(action)
      success && success(res)
    })
    .catch((err) => {
      error && error(err)
    })
}
