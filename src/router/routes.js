
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') },
      { path: 'register', component: () => import('pages/regiterpage.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
