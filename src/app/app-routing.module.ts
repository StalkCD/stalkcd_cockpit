import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './areas/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', loadChildren: () => import('./areas/home/home.module').then(m => m.HomeModule) },
  { path:'convert', loadChildren: () => import('./areas/convert/convert.module').then(m => m.ConvertModule) },
  { path: 'error', loadChildren: () => import('./core/components/error/error.module').then(m => m.ErrorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
