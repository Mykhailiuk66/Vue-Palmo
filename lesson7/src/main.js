import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { LogMixin } from './mixins/logMixin.js'

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App)

// Глобальна Директива:
// Реєструйте вашу власну директиву глобально, щоб вона була доступна в усьому додатку.
app.directive('listen-click', {
  mounted(el) {
    el.addEventListener('click', () => {
      alert('Ви клікнули на елемент, до якого застосована глобальна директива!');
    });
  }
})

// Глобальний Міксін:
// Створіть глобальний міксін і додайте його глобально в вашому основному файлі main.js або main.ts.
app.mixin(LogMixin)
app.use(router).use(vuetify)
app.mount('#app')
