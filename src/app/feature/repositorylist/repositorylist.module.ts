import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorylistComponent } from './repositorylist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RepositorylistRoutingModule } from './repositorylist-routing.module';



@NgModule({
  declarations: [
    RepositorylistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RepositorylistRoutingModule
  ],
  exports: [
    RepositorylistComponent
  ]
})
export class RepositorylistModule { }
