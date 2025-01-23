import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

const storedUser = localStorage.getItem('user');
if (storedUser) {
  store.commit('SET_USER', JSON.parse(storedUser));
}

const app = createApp(App)

app.use(router)
app.use(store);

app.mount('#app')
