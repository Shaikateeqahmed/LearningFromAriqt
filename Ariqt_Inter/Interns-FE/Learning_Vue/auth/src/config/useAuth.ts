import {ref} from 'vue';
import {myMSALObj, state} from './msalconfig';

export function useAuth(){
    const isAuthenticated = ref(false);

    const login = async ()=>{
        try {
          //check of MSAL is initialized before using it
          if(!myMSALObj){
            throw new Error('MSAL not initialized. Call initializeMsal() before using MSAL API')
          }  

          const loginResponse = await myMSALObj.loginRedirect();
          isAuthenticated.value = true;
          console.log('Login Success:', loginResponse);
        } catch (error) {
            console.log('Login error:', error);
        }
    }

    const logout = ()=>{
        try {
            //check of MSAL is initialized before using it
            if(!myMSALObj){
              throw new Error('MSAL not initialized. Call initializeMsal() before using MSAL API')
            }  
  
            myMSALObj.logoutRedirect();
            isAuthenticated.value = false;
            console.log('Logged Out');
          } catch (error) {
              console.log('Login error:', error);
          }
    }

    const handleRedirect = async ()=>{
        try {
            await myMSALObj.handleRedirectPromise();
            state.isAuthenticated = myMSALObj.getAllAccounts().length > 0;
            state.user = myMSALObj.getAllAccounts()[0];
        } catch (error) {
            console.log('Redirect error:', error);
        }
    }

    return { isAuthenticated, login, logout, handleRedirect};

}