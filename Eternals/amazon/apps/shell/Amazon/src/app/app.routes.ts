import { Route } from '@angular/router';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { UiHomeComponent } from './ui-home/ui-home.component';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: UiHomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'products', loadComponent: () => import('products/RemoteProducts').then((m) => m.AppComponent) },
  { path: 'cart', loadComponent: () => import('cart/RemoteCart').then((m) => m.AppComponent) },
];
