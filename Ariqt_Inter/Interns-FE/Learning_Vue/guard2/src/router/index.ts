import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccessView from '../views/AccessView.vue'
import {myMSALObj, state} from '../config/msalConfig';
import NoAccessView from '../views/NoAccessView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/access',
    name: 'access',
    component: AccessView,
    beforeEnter : (to, from, next)=>{
      if(state.isAuthenticated){
        next()
      }else{
        next({name:'NoAccess'})
      }
    }
  },
  {
    path: '/noAccess',
    name: 'NoAccess',
    component: NoAccessView,
    beforeEnter : (to, from, next)=>{
      if(state.isAuthenticated){
        next({name:'home'})
      }else{
        next()
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
