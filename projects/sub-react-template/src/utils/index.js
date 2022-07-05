const files = require.context('./', true, /(^\.\/index\-)([a-zA-Z\/]+)\.js$/)

// utils 分模块挂载到window
files.keys().forEach((item) => {
  const indexName = 'Utils_' + item.match(/\.\/index\-(\S*)\//)[1]
  const indexFn = files(item)

  if (JSON.stringify(window.indexName) === '{}') window[indexName] = {}
  window[indexName] = { ...window[indexName], ...indexFn }
})
