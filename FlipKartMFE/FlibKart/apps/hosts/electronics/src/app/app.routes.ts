import { Route } from '@angular/router';
import { ViewElectornicsComponent } from './view-electornics/view-electornics.component';

export const appRoutes: Route[] = [
    {path : '', component : ViewElectornicsComponent},
    {path: 'view-gaming', loadChildren:()=> import('gaming/Module').then((m)=>m.ViewGamingModule)},
    {path: 'view-laptop', loadChildren:()=> import('laptop/Module').then((m)=>m.ViewLaptopModule)},
    {path: 'view-mobile', loadChildren:()=> import('mobile/Module').then((m)=>m.ViewMobileModule)},
    {path: 'view-profile', loadChildren:()=> import('profile/Module').then((m)=>m.ViewProfileModule)}

];
