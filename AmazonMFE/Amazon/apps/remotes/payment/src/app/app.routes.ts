import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path: '', loadChildren:()=> import('./view-payment/view-payment.module').then((m)=> m.ViewPaymentModule)
}];
