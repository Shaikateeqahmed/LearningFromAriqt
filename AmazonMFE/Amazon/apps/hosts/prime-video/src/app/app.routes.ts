import { Route } from '@angular/router';
import { ViewPrimeVedioComponent } from './view-prime-vedio/view-prime-vedio.component';
export const appRoutes: Route[] = [
    {
        path:'',
        component : ViewPrimeVedioComponent
    },
    {
        path: 'view-profile',
        loadChildren: () =>
          import('profile/Module').then((m) => m.ViewProfileModule),
      },
    {
        path: 'view-home',
        loadChildren: () =>
          import('home/Module').then((m) => m.ViewHomeModule),
      },
    {
        path: 'view-movies',
        loadChildren: () =>
          import('movies/Module').then((m) => m.ViewMoviesModule),
      }
];
