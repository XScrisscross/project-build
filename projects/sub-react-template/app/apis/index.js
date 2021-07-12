const files = require.context('./', true, /(^\.\/index\-module\-)([a-zA-Z\/]+)\.js$/)

// apis 分模块挂载到window
files.keys().forEach((item) => {
  const indexName = 'Apis_' + item.match(/\.\/index\-module\-(\S*)\//)[1]
  const indexFn = files(item)

  if (JSON.stringify(window.indexName) === '{}') window[indexName] = {}
  window[indexName] = { ...window[indexName], ...indexFn }
})
