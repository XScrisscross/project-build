export default [
  {
    name: 'sub-vue-template',
    entry: process.env.VUE_APP_SUB_VUE_TEMPLATE,
    container: '#subapp-viewport',
    activeRule: '/sub-vue-template',
  },
  {
    name: 'sub-react-template',
    entry: process.env.VUE_APP_SUB_REACT_TEMPLATE,
    container: '#subapp-viewport',
    activeRule: '/sub-react-template',
  },
]
