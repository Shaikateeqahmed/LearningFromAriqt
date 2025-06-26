import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '', loadChildren:()=> import('./view-women/view-women.module').then((m)=>m.ViewWomenModule)
    }
];
