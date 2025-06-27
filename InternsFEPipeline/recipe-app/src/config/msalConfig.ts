import { AccountInfo, PublicClientApplication } from "@azure/msal-browser"
import { reactive } from "vue"

export const msalConfig = {
    auth : {
        clientId :'0c050124-cfe6-43b1-b68e-dda8e06ab36f',
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