import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { CountUpModule } from 'ngx-countup';
import { KpiCardComponent } from './components/kpis/kpi-card/kpi-card.component';
import { BuildresultsChartComponent } from './components/charts/buildresults-chart/buildresults-chart.component';



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
    NgChartsModule,
    CountUpModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }