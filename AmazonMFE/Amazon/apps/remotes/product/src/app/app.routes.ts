import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-product/view-product.module').then((m)=>m.ViewProductModule)}

];
