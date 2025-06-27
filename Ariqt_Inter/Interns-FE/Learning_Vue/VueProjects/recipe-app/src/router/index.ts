import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RecipeView from '../views/RecipeView.vue';
import RecipiesView from '../views/RecipiesView.vue';
import NutritionView from '../views/NutritionView.vue';
import CostView from '../views/CostView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/recipies',
    name: 'recipies',
    component: RecipiesView
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: RecipeView
  },
  {
    path: '/nutritions/:id',
    name: 'nutritions',
    component: NutritionView
  },
  {
    path: '/cost/:id',
    name: 'cost',
    component: CostView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
