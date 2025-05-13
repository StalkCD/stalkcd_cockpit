import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/feature/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', loadComponent: () => import('./app/feature/home/home.component').then(m => m.HomeComponent) },
  { path: 'repositorylist', loadComponent: () => import('./app/feature/repositorylist/repositorylist.component').then(m => m.RepositorylistComponent) },
  { path: 'convert', loadComponent: () => import('./app/feature/convert/convert.component').then(m => m.ConvertComponent) },
  { path: 'error', loadComponent: () => import('./app/core/components/error/error.component').then(m => m.ErrorComponent) },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),  // Directly use the routes array
    provideHttpClient(),
  ],
}).catch(err => console.error(err));
