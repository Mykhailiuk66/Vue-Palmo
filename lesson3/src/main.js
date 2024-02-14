import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import GreatingsComponent from './components/GreatingsComponent'

const app = createApp(App)

app.component('GreatingsComponent', GreatingsComponent)

app.mount('#app')