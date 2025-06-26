import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-mobile/view-mobile.module').then((m)=>m.ViewMobileModule)}
];
