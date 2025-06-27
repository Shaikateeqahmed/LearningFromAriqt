import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-profile/view-profile.module').then((m)=>m.ViewProfileModule)}

];
