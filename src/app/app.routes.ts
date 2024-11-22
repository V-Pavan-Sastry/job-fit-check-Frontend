import { Routes } from '@angular/router';
import { CheckComponent } from './check/check.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect default path
    { path: 'home', component: CheckComponent },
    { path: '**', component: CheckComponent}, // Wildcard route for a 404 page
];
