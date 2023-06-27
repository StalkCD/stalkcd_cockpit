import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    HomeComponent,
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }