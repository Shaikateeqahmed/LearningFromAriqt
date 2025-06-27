import { AccountInfo, PublicClientApplication, RedirectRequest } from '@azure/msal-browser';
import { reactive } from 'vue';

export const msalConfig = {
    auth: {
        clientId: '4f971bd1-a35a-4322-997d-4f237d6c808a',
        authority: 'https://login.microsoftonline.com/8f6bd982-92c3-4de0-985d-0e287c55e379',
        redirectUri: window.location.origin,
        postLogoutUri: window.location.origin
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    }
};

export const graphScopes: RedirectRequest = {
    scopes: ['user.read', 'openid', 'profile']
};

export const state = reactive({
    isAuthenticated: false,
    user: null as AccountInfo | null
});

export const myMSALObj = new PublicClientApplication(msalConfig);