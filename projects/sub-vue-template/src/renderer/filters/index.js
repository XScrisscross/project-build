import Vue from 'vue'

Vue.filter('toWan', function (num) {
  return num >= 10000 ? (num / 10000).toFixed(1) + '万' : num
})

Vue.filter('moment', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('toDate', function (val, format) {
  return moment(val).format(format || 'YYYY-MM-DD')
})
