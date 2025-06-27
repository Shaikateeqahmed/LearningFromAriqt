import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useAuth } from './config/useAuth';
const { login, logout, handleRedirect } = useAuth();
await handleRedirect();

createApp(App).use(router).mount('#app')
