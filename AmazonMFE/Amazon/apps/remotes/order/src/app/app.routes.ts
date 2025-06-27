import { Route } from '@angular/router';

export const appRoutes: Route[] = [ {path: '', loadChildren:()=> import('./view-order/view-order.module').then((m)=> m.ViewOrderModule)}];
