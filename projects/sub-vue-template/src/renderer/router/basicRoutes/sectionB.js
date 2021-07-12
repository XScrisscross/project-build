export default [
  {
    path: '/sbviewA',
    component: () => import(/* webpackChunkName: "sectionB" */ '../../views/sectionB/ViewA.vue'),
    name: 'sbviewA',
    meta: {
      title: '视图A',
    },
  },
  {
    path: '/sbviewB',
    component: () => import(/* webpackChunkName: "sectionB" */ '../../views/sectionB/ViewB.vue'),
    name: 'sbviewB',
    meta: {
      title: '视图B',
    },
  },
]