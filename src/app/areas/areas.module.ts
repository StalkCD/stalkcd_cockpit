import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertModule } from './convert/convert.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ConvertModule,
    HomeModule
  ],
  exports: [
  ]
})
export class AreasModule { }
