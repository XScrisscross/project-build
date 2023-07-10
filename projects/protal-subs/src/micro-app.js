export default [
  {
    name: 'sub-vue-template',
    entry: process.env.VUE_APP_SUB_VUE_TEMPLATE, // 5000
    container: '#subapp-viewport',
    activeRule: '/sub-vue-template',
  },
  {
    name: 'sub-react-template',
    entry: process.env.VUE_APP_SUB_REACT_TEMPLATE, // 6000
    container: '#subapp-viewport',
    activeRule: '/sub-react-template',
  },
]
