import {ref} from 'vue';
import {myMSALObj, state} from './msalconfig';
// export const isAuthenticated = ref(false);

export function useAuth(){
    const login = async ()=>{
        try {
          //check of MSAL is initialized before using it
          if(!myMSALObj){
            throw new Error('MSAL not initialized. Call initializeMsal() before using MSAL API')
          }  

        //   const loginResponse = await myMSALObj.loginRedirect();
        //   isAuthenticated.value = true;
        //   console.log('Login Success:', loginResponse);
        if(myMSALObj.getAllAccounts().length >  0){
            state.isAuthenticated = myMSALObj.getAllAccounts().length > 0;
            state.user = myMSALObj.getAllAccounts()[0];
            myMSALObj.setActiveAccount(state.user);
        }else{
            await myMSALObj.loginRedirect();
        }
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
            state.isAuthenticated = false;
            console.log('Logged Out');
          } catch (error) {
              console.log('Login error:', error);
          }
    }

    const handleRedirect = async ()=>{
        try {
            await myMSALObj.initialize();
            await myMSALObj.handleRedirectPromise();
           
        } catch (error) {
            console.log('Redirect error:', error);
        }
    }

    return { login, logout, handleRedirect};

}

