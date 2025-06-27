import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {myMSALObj, state} from "../config/msalconfig";
import HiView from "../views/HiView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hi',
    name: 'hi',
    component: HiView
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

// router.beforeEach((to,from, next)=>{
//   if(to.name == "home" && state.isAuthenticated){
//     next({name:"hi"});
//     console.log(to.name);
//   }else{
//     next();
//   }
// })
export default router
