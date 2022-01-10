
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/Index.vue') },
      { path: 'manage/merchant', component: () => import('pages/manage/Merchant.vue') },
      { path: 'manage/subscription', component: () => import('pages/manage/Subscription.vue') },
      { path: 'billing/payment', component: () => import('pages/billing/Payment.vue') },
      { path: 'billing/storebilling', component: () => import('pages/billing/Storebilling.vue') },
      { path: 'report/transaction', component: () => import('pages/report/Transaction.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
