import { Route } from '@angular/router';
import { ViewFlipKartComponent } from './view-flip-kart/view-flip-kart.component';

export const appRoutes: Route[] = [
    {path:'', component : ViewFlipKartComponent},
    {
        path : 'view-electronics',
        loadComponent : ()=> import('electronics/Component').then((m)=> m.AppComponent)
    },
    {
        path : 'view-fashion',
        loadComponent : ()=> import('fashion/Component').then((m)=> m.AppComponent)
    }
];
