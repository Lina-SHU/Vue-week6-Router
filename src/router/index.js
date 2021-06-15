import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: ':patchMatch(.*)*',
        component: () => import('../views/NotFound.vue')
      },
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: 'products/:id',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'products/carts',
        component: () => import('../views/Carts.vue')
      },
      {
        path: 'login',
        component: () => import('../views/Login.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Order.vue')
      },
      {
        path: 'orderSubmit',
        component: () => import('../views/OrderSubmit.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
