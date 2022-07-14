/**
 * [routes,layout]
 * @param routes 二级路由routes
 * @param layout 二级路由共享component
 * @note
 * 自动导入 /文件名(lowercase)/path
 */
 import Layout from '../../_layout/basic-layout.vue';

 export default [
   [
     {
       path: 'example',
       component: () => import(/* webpackChunkName: "sectionD" */ '../../views/vue3-example/example.vue'),
       name: 'example',
       meta: {
         title: 'example',
       },
     },
   ],
   Layout,
 ];
 