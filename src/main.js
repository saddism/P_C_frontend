import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { isMockMode } from './utils/api';

if (isMockMode()) {
  import('./mock');
}

const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app');
