import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }