import { AccountInfo, PublicClientApplication } from "@azure/msal-browser"
import { reactive } from "vue"

export const msalConfig = {
    auth : {
        clientId :'2e8f4061-2a19-487d-bac1-fdeb1ac12be1',
        authority : 'https://login.microsoftonline.com/8f6bd982-92c3-4de0-985d-0e287c55e379',
        redirectUri: window.location.origin,
        postLogoutUri: window.location.origin
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
}

export const state = reactive({
    isAuthenticated: false,
    user: null as AccountInfo | null
})

export const MSALObj = new PublicClientApplication(msalConfig);