import { createRouter, createWebHistory } from 'vue-router'

import CounterComponent from '../components/CounterComponent.vue'
import ProductsComponent from '../components/ProductsComponent.vue'
import ProfileComponent from '../components/ProfileComponent.vue'
import { useUserStore } from '@/store/userStore'

// 11. Router:
// Використайте store для отримання данних про користувача у файлах Roter, наприклад для переадресаціі неавторизованних користувачів


const routes = [
  {
    path: "/",
    name: "products",
    component: ProductsComponent
  },
  {
    path: "/counter",
    name: "counter",
    component: CounterComponent
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileComponent,
    meta: { requiresAuth: true }
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    alert('You must be authenticated to access this page')
    next('/');
  } else {
    next();
  }
})



export default router