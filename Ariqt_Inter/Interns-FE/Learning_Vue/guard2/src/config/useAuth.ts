import {myMSALObj, state} from './msalConfig';

export function useAuth(){
    const login = async ()=>{
        try {
          //check of MSAL is initialized before using it
          if(!myMSALObj){
            throw new Error('MSAL not initialized. Call initializeMsal() before using MSAL API')
          }  

        //   const loginResponse = await myMSALObj.loginRedirect();
        //   console.log('Login Success:', loginResponse);
        let account = myMSALObj.getAllAccounts().length > 0;
        if(account){
            handleRedirect()
        }else{
            await myMSALObj.loginRedirect();
            handleRedirect();
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
            state.isAuthenticated = myMSALObj.getAllAccounts().length > 0;
            state.user = myMSALObj.getAllAccounts()[0];
            myMSALObj.setActiveAccount(state.user);
            
        } catch (error) {
            console.log('Redirect error:', error);
        }
    }

    return { login, logout, handleRedirect};

}

