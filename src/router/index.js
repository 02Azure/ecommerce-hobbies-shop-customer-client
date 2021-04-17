import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Carts from '../views/Carts.vue'
import Transactions from '../views/Transactions.vue'
import TransactionDetail from '../views/TransactionDetail.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/products',
    redirect: { name: 'Home' }
  },
  {
    path: '/products/:id', // redirect ke home jika tanpa :id
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions
  },
  {
    path: '/transactions/:id',
    name: 'TransactionDetail',
    component: TransactionDetail
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'Carts' && !localStorage.access_token) ||
     ((to.name === 'Login' || to.name === 'Register') && localStorage.access_token)) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
