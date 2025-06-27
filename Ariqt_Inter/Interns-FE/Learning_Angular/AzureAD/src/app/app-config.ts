import { LogLevel, Configuration, BrowserCacheLocation } from "@azure/msal-browser";

export const b2cPolicies = {
    names :{
        signUpSignIn : 'B2C_1_SignUpSignIn',
        resetPassword : 'B2C_1_PasswordReset',
        editProfile : 'B2C_1_ProfileEdit'
    },
    authorities : {
        signUpSignIn : {
            authority : 'https://learningAzureADFirstTime.b2clogin.com/learningAzureADFirstTime.onmicrosoft.com/B2C_1_SignUpSignIn'
        },
        resetPassword : {
            authority : 'https://learningAzureADFirstTime.b2clogin.com/learningAzureADFirstTime.onmicrosoft.com/B2C_1_PasswordReset'
        },
        editProfile : {
            authority : 'https://learningAzureADFirstTime.b2clogin.com/learningAzureADFirstTime.onmicrosoft.com/B2C_1_ProfileEdit'
        }
    },
    authorityDomain : 'learningAzureADFirstTime.b2clogin.com'
};

export const msalConfig : Configuration = {
    auth : {
        clientId : '591ef134-bb6b-4e82-b6b0-1c18d5bad045',
        authority : b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities : [b2cPolicies.authorityDomain],
        redirectUri : window.location.origin,
        postLogoutRedirectUri :'http://localhost:4200',
    },
    cache : {
        cacheLocation : BrowserCacheLocation.LocalStorage
    }
}

export const loginRequest = {
    scopes : ['https://learningAzureADFirstTime.onmicrosoft.com/591ef134-bb6b-4e82-b6b0-1c18d5bad045/default']
}