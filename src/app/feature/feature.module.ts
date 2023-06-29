import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { ConvertModule } from './convert/convert.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    ConvertModule
  ]
})
export class FeatureModule { }
