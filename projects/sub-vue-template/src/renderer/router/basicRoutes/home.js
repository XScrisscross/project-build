export default [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "sectionA" */ '../../views/Home.vue'),
    name: 'home',
    meta: {
      title: 'home',
    },
  },
  {
    path: '/saviewB',
    component: () => import(/* webpackChunkName: "sectionA" */ '../../views/sectionA/ViewB.vue'),
    name: 'saviewB',
    meta: {
      title: '视图B',
    },
  },
]
