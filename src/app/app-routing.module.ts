import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
  { path:'repositorylist', loadChildren: () => import('./feature/repositorylist/repositorylist.module').then(m => m.RepositorylistModule)},
  { path:'convert', loadChildren: () => import('./feature/convert/convert.module').then(m => m.ConvertModule) },
  { path: 'error', loadChildren: () => import('./core/components/error/error.module').then(m => m.ErrorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
