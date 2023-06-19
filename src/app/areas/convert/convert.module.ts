import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './convert.component';
import { ConvertRoutingModule } from './convert-routing.module';



@NgModule({
  declarations: [ConvertComponent],
  imports: [
    CommonModule,
    ConvertRoutingModule
  ],
  exports: [ConvertComponent
  ]
})
export class ConvertModule { }
