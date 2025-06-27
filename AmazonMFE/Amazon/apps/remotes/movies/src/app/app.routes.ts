import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: '', loadChildren:()=> import('./view-movies/view-movies.module').then((m)=> m.ViewMoviesModule)}
];
