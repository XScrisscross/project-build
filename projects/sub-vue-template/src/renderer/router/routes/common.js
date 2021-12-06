export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/Login.vue'),
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../../views/Error.vue'),
  },
];
