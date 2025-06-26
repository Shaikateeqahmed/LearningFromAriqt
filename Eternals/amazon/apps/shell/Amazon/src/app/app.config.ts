import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAuth0({
      domain: 'dev-gy116l8rvru54tav.us.auth0.com',
      clientId: 'SxOca9yBRRnbBSMcfjy3yun0dOuczmH8',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    provideAnimations(), // required animations providers
    provideToastr({
      maxOpened: 4, // Limit to 4 toastr notifications at a time
      autoDismiss: true, // Automatically dismiss older toastrs
      timeOut: 2000, // Set global time for all toastrs (2 seconds)
    }), // Toastr providers
  ],
};
