import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useAuth } from './config/useAuth';
import { state } from "./config/msalConfig";


const {login, handleRedirect} = useAuth();
await handleRedirect();
await login();
if(state.isAuthenticated){
    createApp(App).use(router).mount('#app');
}