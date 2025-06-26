import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-gaming/view-gaming.module').then((m)=>m.ViewGamingModule)}
];
