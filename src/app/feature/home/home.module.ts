import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountUpModule } from 'ngx-countup';
import { KpiCardComponent } from './components/kpis/kpi-card/kpi-card.component';
import { BuildresultsChartComponent } from './components/charts/buildresults-chart/buildresults-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ArrivalrateChartComponent } from './components/charts/arrivalrate-chart/arrivalrate-chart.component';
import { AvgstepdurationperstepperjobChartComponent } from './components/charts/avgstepdurationperstepperjob-chart/avgstepdurationperstepperjob-chart.component';
import { CustomCardComponent } from './components/kpis/custom-card/custom-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    KpiCardComponent,
    BuildresultsChartComponent,
    ArrivalrateChartComponent,
    AvgstepdurationperstepperjobChartComponent,
    CustomCardComponent
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