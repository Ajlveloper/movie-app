import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CatalogsPageComponent } from './pages/catalogs-page/catalogs-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomePageComponent,
    },
    {
        path: 'catalogs',
        component: CatalogsPageComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
