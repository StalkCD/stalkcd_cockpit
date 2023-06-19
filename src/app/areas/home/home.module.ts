import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { KpiListComponent } from './components/kpi-list/kpi-list.component';



@NgModule({
  declarations: [
    HomeComponent, 
    KpiListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule
  ],
  exports: [
    HomeComponent,
    KpiListComponent
  ]
})
export class HomeModule { }