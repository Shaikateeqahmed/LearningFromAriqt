import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-men/view-men.module').then((m)=>m.ViewMenModule)}

];
