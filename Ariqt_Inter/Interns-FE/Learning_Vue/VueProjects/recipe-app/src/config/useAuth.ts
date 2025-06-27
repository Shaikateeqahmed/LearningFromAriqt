import { MSALObj, state } from "./msalConfig"

export const useAuth = ()=>{

    const login = async () => {
        try {
            if(!MSALObj){
                throw new Error("MSAL not initialized. initialized it before using MSAL API");
            }
            let account = MSALObj.getAllAccounts().length > 0;
            if(account){
                handleRedirect();
            }else{
                await MSALObj.loginRedirect();
                handleRedirect();
            }
        } catch (error) {
            console.error('Login error:', error);
        }
        
    }

    const logout = async () => {
        try {
            if(!MSALObj){
                throw new Error("MSAL not initialized. initialized it before using MSAL API");
            }
            MSALObj.logoutRedirect();
            state.isAuthenticated = false;
            console.log("Logged Out Succussfully");
        } catch (error) {
            console.error('Login error:', error);
        }
        
    }

    const handleRedirect = async ()=>{
        try {
            await MSALObj.initialize();
            await MSALObj.handleRedirectPromise();
            state.isAuthenticated = MSALObj.getAllAccounts().length > 0;
            state.user = MSALObj.getAllAccounts()[0];
            MSALObj.setActiveAccount(MSALObj.getAllAccounts()[0])
        } catch (error) {
            
        }
    }

    return { login, logout, handleRedirect }
}