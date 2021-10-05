import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewLinksBio from '../views/ViewLinksBio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ViewLinksBio',
    component: ViewLinksBio
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
