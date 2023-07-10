/**
 * @param routes:[]
 * @note
 * 访问路由：/path
 */
export default [
  {
    path: '/sdviewC',
    component: () => import(/* webpackChunkName: "sectionB" */ '@/views/sectionB/ViewA.vue'),
    name: 'sdviewC',
    meta: {
      title: '视图C',
      keepAlive: false,
    },
  },
  {
    path: '/sdviewD',
    component: () => import(/* webpackChunkName: "sectionB" */ '@/views/sectionB/ViewB.vue'),
    name: 'sdviewD',
    meta: {
      title: '视图D',
      keepAlive: false,
    },
  },
];
