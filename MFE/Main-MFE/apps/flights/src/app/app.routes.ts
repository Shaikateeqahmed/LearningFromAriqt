import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
    path:'',
    loadChildren : ()=>
        import('./view-flights/view-flights.module').then((m) => m.ViewFlightsModule)
}];
