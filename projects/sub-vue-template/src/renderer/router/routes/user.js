import BasicLayout from '../../layout/BasicLayout.vue'

export default [
  [
    {
      path: '/scviewA',
      component: () => import(/* webpackChunkName: "sectionC" */ '../../views/sectionC/ViewA.vue'),
      name: 'scviewA',
      meta: {
        title: '视图A',
      },
    },
    {
      path: '/scviewB',
      component: () => import(/* webpackChunkName: "sectionC" */ '../../views/sectionC/ViewB.vue'),
      name: 'scviewB',
      meta: {
        title: '视图B',
      },
    },
  ],
  BasicLayout,
]
