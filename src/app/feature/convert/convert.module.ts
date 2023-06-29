import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './convert.component';
import { ConvertRoutingModule } from './convert-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ConvertComponent],
  imports: [
    CommonModule,
    ConvertRoutingModule,
    SharedModule
  ],
  exports: [ConvertComponent
  ]
})
export class ConvertModule { }
