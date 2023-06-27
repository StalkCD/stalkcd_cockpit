import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertModule } from './components/convert/convert.module';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConvertModule,
    HomeModule
  ],
  exports: [  
  ]
})
export class SharedModule { }
