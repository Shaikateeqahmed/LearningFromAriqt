import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path:'',
    loadChildren : ()=>
        import('flights/Module').then((m)=> m.ViewFlightsModule)
}];
