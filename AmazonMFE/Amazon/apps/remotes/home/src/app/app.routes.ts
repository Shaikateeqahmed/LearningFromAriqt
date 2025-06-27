import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-home/view-home.module').then((m)=> m.ViewHomeModule)}
];
