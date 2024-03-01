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

app.directive('listen-click', {
  mounted(el) {
    el.addEventListener('click', () => {
      alert('Ви клікнули на елемент, до якого застосована глобальна директива!');
    });
  }
})


app.mixin(LogMixin)
app.use(router).use(vuetify)
app.mount('#app')
