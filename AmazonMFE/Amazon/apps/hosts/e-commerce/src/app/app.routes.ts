import { Route } from '@angular/router';
import { ViewECommerceComponent } from './view-e-commerce/view-e-commerce.component';
export const appRoutes: Route[] = [
  {
    path: '',
    component: ViewECommerceComponent
  },
    {
        path: 'view-profile',
        loadChildren: () =>
          import('profile/Module').then((m) => m.ViewProfileModule),
      },
    {
        path: 'view-order',
        loadChildren: () =>
          import('order/Module').then((m) => m.ViewOrderModule),
      },
    {
        path: 'view-product',
        loadChildren: () =>
          import('product/Module').then((m) => m.ViewProductModule),
      },
    {
      path: 'view-payment',
      loadChildren: () =>
        import('payment/Module').then((m) => m.ViewPaymentModule),
    }
];
