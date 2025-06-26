import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-laptop/view-laptop.module').then((m)=>m.ViewLaptopModule)}

];
