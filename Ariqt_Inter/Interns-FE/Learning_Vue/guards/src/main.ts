import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useAuth } from './config/useAuth';
import { myMSALObj, state } from "./config/msalconfig";

const { login, logout, handleRedirect } = useAuth();
await handleRedirect();
await login();
console.log(state.isAuthenticated);
if(state.isAuthenticated){
    createApp(App).use(router).mount('#app');
}
