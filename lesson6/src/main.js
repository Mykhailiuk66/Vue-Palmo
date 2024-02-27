import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './router'


const vuetify = createVuetify({
  components,
  directives,
})
const pinia = createPinia()

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')
