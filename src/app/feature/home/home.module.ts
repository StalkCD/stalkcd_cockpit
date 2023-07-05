import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountUpModule } from 'ngx-countup';
import { KpiCardComponent } from './components/kpis/kpi-card/kpi-card.component';
import { BuildresultsChartComponent } from './components/charts/buildresults-chart/buildresults-chart.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    HomeComponent,
    KpiCardComponent,
    BuildresultsChartComponent,
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CountUpModule,
    NgChartsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }