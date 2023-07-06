import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RepositorylistComponent } from './repositorylist.component';

const routes: Routes = [
  { path:'', component: RepositorylistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositorylistRoutingModule { }