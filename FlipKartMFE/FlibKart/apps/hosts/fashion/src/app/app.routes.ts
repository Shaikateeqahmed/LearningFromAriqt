import { Route } from '@angular/router';
import { ViewFashionComponent } from './view-fashion/view-fashion.component';

export const appRoutes: Route[] = [
    {path : '', component : ViewFashionComponent},
    {path: 'view-men', loadChildren:()=> import('men/Module').then((m)=> m.ViewMenModule)},
    {path: 'view-women', loadChildren:()=> import('women/Module').then((m)=>m.ViewWomenModule)},
    {path: 'view-kids', loadChildren:()=> import('kids/Module').then((m)=>m.ViewKidsModule)},
    {path: 'view-profile', loadChildren:()=> import('profile/Module').then((m)=> m.ViewProfileModule)}
];
