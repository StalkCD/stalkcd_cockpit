import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ConvertModule } from './convert/convert.module';
import { RepositorylistModule } from './repositorylist/repositorylist.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    ConvertModule,
    RepositorylistModule
  ]
})
export class FeatureModule { }
