import { createRouter, createWebHistory } from 'vue-router'
import UserId from '../components/UserId'
import ParentComponent from '../components/ParentComponent'
import ChildComponent from '../components/ChildComponent'
import HomeComponent from '../components/HomeComponent'
import ProgrammaticNavigation from '../components/ProgrammaticNavigation'
import ProfileComponent from '../components/ProfileComponent'
import NotFound from '../components/NotFound'
import AdminPage from '../components/AdminPage'
import AuthenticatedPage from '../components/AuthenticatedPage'
import FormComponent from '../components/FormComponent'

import { isAuthenticated, isAdmin } from '@/utils'

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFound
  },
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/user/:id',
    name: 'user-id',
    component: UserId,
    props: true
  },
  {
    path: '/parent',
    name: 'parent',
    component: ParentComponent,
    children: [
      {
        path: 'child',
        name: 'child',
        component: ChildComponent
      }
    ]
  },
  {
    path: '/programmatic-navigation',
    name: 'programmatic-navigation',
    component: ProgrammaticNavigation,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileComponent,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin',
    name: 'admin-page',
    component: AdminPage,
    meta: { requiresAdmin: true }
  },
  {
    path: '/authenticated',
    name: 'authenticated-page',
    component: AuthenticatedPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/form',
    name: 'form',
    component: FormComponent,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to, from, next) => {
  const isAuth = isAuthenticated()
  const isAdminUser = isAdmin()

  if (to.meta.requiresAuth && !isAuth) {
    alert('Only authenticated users can access a page')
    next('/')
  } else if (to.meta.requiresAdmin && (!isAuth || !isAdminUser)) {
    next('/404')
  } else {
    next()
  }
})


export default router