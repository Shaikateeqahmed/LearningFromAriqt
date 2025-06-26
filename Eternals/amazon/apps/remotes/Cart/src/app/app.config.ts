import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimations(), // required animations providers
    provideToastr({
      maxOpened: 4, // Limit to 4 toastr notifications at a time
      autoDismiss: true, // Automatically dismiss older toastrs
      timeOut: 2000, // Set global time for all toastrs (2 seconds)
    }), // Toastr providers
  ],
};
