/**
 * @param routes:[]
 * @note
 * 访问路由：/path/path
 */
export default [
  {
    name: 'sectionA',
    path: '/sectionA',
    component: () => import('@/_layout/basic-layout.vue'),
    children: [
      {
        path: 'sdviewA',
        component: () => import(/* webpackChunkName: "sectionA" */ '@/views/sectionA/ViewA.vue'),
        name: 'sdviewA',
        meta: {
          title: '视图A',
          keepAlive: false,
        },
      },
      {
        path: 'sdviewB',
        component: () => import(/* webpackChunkName: "sectionA" */ '@/views/sectionA/ViewB.vue'),
        name: 'sdviewB',
        meta: {
          title: '视图B',
          keepAlive: false,
        },
      },
    ],
  },
];
