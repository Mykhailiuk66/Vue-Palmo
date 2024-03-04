import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import GreatingsComponent from './components/GreatingsComponent'

const app = createApp(App)

// 3.	Створіть нові компоненти та зареєструйте іх локально і глобально 
// (хоча б один компонент).
app.component('GreatingsComponent', GreatingsComponent)

app.mount('#app')





// 2.	Додайте за допомогою пакетного менеджеру бібліотеку Axios до проєкту. 
// Сформуйте в окремому файлі инстанс Axios, сконфігуруйте його та імпортуйте за потребою.
//
// Lesson2/services/axios.js