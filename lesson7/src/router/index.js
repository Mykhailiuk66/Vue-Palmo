import { createRouter, createWebHistory } from 'vue-router'

import ModalToggler from '../components/ModalToggler.vue'
import RandomForm from '../components/RandomForm.vue'
import DirectivesComponent from '../components/DirectivesComponent.vue'

const routes = [
  {
    path: "/",
    name: "modal-toggler",
    component: ModalToggler
  },
  {
    path: "/form",
    name: "form",
    component: RandomForm
  },
  {
    path: "/directives",
    name: "directives",
    component: DirectivesComponent
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router