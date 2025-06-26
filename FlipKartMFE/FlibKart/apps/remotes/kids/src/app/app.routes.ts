import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-kids/view-kids.module').then((m)=>m.ViewKidsModule)}
];
