/**
 * @param routes 一级单路由
 * @note
 * 自动导入 产生路由 /path
 */
export default [
  {
    path: '/sbviewC',
    component: () => import(/* webpackChunkName: "sectionB" */ '../../views/sectionB/ViewA.vue'),
    name: 'sbviewC',
    meta: {
      title: '视图C',
    },
  },
  {
    path: '/sbviewD',
    component: () => import(/* webpackChunkName: "sectionB" */ '../../views/sectionB/ViewB.vue'),
    name: 'sbviewD',
    meta: {
      title: '视图D',
    },
  },
];
