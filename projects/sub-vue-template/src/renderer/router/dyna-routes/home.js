/**
 * [routes,layout]
 * @param routes 二级路由routes
 * @param layout 二级路由共享component
 * @note
 * 自动导入 /文件名(lowercase)/path
 */
import Layout from '../../layout/BasicLayout.vue';

export default [
  [
    {
      path: 'sdviewA',
      component: () => import(/* webpackChunkName: "sectionD" */ '../../views/sectionA/ViewA.vue'),
      name: 'sdviewA',
      meta: {
        title: '视图A',
      },
    },
    {
      path: 'sdviewB',
      component: () => import(/* webpackChunkName: "sectionD" */ '../../views/sectionA/ViewB.vue'),
      name: 'sdviewB',
      meta: {
        title: '视图B',
      },
    },
  ],
  Layout,
];
