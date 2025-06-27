import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MsalRedirectComponent } from './msal.redirect/msal.redirect.component';
import { BrowserCacheLocation, IPublicClientApplication, InteractionType, LogLevel, PublicClientApplication } from '@azure/msal-browser';
import { MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalBroadcastService, MsalGuard, MsalGuardConfiguration, MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalService, MsalRedirectComponent } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { loginRequest, msalConfig } from './app-config';
export function loggerCallback(logLevel : LogLevel, message : string){
  console.log(message);
}

export function MSALInstanceFactory() : IPublicClientApplication{
  return new PublicClientApplication(msalConfig)
}

export function MSALInterceptorConfigFactory() : MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me',['user.read']);

  return {
    interactionType : InteractionType.Redirect,
    protectedResourceMap
  }
}

export function MSALGuardConfigFactory() : MsalGuardConfiguration{
  return {interactionType : InteractionType.Redirect,
  authRequest : loginRequest};
}

@NgModule({
  declarations: [
    AppComponent,
    // MsalRedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : MsalInterceptor,
    multi : true
  },
  {
    provide : MSAL_INSTANCE,
    useFactory : MSALInstanceFactory
  },
  {
    provide : MSAL_GUARD_CONFIG,
    useFactory : MSALGuardConfigFactory
  },
  {
    provide : MSAL_INTERCEPTOR_CONFIG,
    useFactory : MSALInterceptorConfigFactory
  },
  MsalService,
  MsalGuard,
  MsalBroadcastService],
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule { }
