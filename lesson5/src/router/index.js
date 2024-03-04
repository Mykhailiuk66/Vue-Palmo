// Налаштуйте базові маршрути для декількох компонентів у вашому додатку



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
  // Реалізуйте "404 Not Found" маршрут і сторінку, яка відображається, коли користувач переходить на неіснуючий маршрут.
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
// Створіть маршрут, який використовує динамічний параметр, і виводьте його в компоненті.
// Налаштуйте маршрут так, щоб параметри шляху передавалися як props до компонента.
  {
    path: '/user/:id',
    name: 'user-id',
    component: UserId,
    props: true
  },
  // Налаштуйте вкладені маршрути і виведіть дочірній компонент в батьківському компоненті.
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
  // Реалізуйте програмне перенаправлення між маршрутами за допомогою this.$router.push
  {
    path: '/programmatic-navigation',
    name: 'programmatic-navigation',
    component: ProgrammaticNavigation,
  },
  // Використовуйте мета-поля маршруту для передачі даних між маршрутами.
  //   Треба щоб у проєкті було декілька сторінок котрі будуть:
  //  - Сторінка яка доступна всім
  //  - Сторінка доступна лише адміністратору
  //  - Сторінка доступна лише авторизованим користувачам
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



// Додайте navigation guards для захисту маршрутів від неавторизованих користувачів.

// Використовувати Vue Router hooks (beforeEach, afterEach) для перевірки автентифікації 
// користувача і його ролі перед переходом на відповідний маршрут.
// Якщо користувач спробує отримати доступ до сторінки, до якої у нього немає прав, 
// він повинен бути перенаправлений на сторінку 404 Not Found Page.

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