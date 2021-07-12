export default [
  [
    {
      path: '/sdviewA',
      component: () => import(/* webpackChunkName: "sectionD" */ '../../views/sectionD/ViewA.vue'),
      name: 'sdviewA',
      meta: {
        title: '视图A',
      },
    },
    {
      path: '/sdviewB',
      component: () => import(/* webpackChunkName: "sectionD" */ '../../views/sectionD/ViewB.vue'),
      name: 'sdviewB',
      meta: {
        title: '视图B',
      },
    },
  ],
  null,
]
