import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertComponent } from './convert.component';
import { ConvertRoutingModule } from './convert-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SourceFormatComponent } from './components/source-format/source-format.component';
import { TargetFormatComponent } from './components/target-format/target-format.component';
import { ConvertConfigComponent } from './components/convert-config/convert-config.component';
import { ConvertSuccessComponent } from './components/convert-success/convert-success.component';
import { DataSourceComponent } from './components/data-source/data-source.component';



@NgModule({
  declarations: [
    ConvertComponent, 
    SourceFormatComponent, 
    TargetFormatComponent, 
    ConvertConfigComponent, 
    ConvertSuccessComponent, 
    DataSourceComponent
  ],
  imports: [
    CommonModule,
    ConvertRoutingModule,
    SharedModule
  ],
  exports: [ConvertComponent
  ]
})
export class ConvertModule { }
