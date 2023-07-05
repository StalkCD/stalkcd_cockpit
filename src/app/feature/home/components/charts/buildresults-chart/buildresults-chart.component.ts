import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType  } from 'chart.js';
import { BuildResult } from 'src/app/shared/models/buildResult';


@Component({
  selector: 'app-buildresults-chart',
  templateUrl: './buildresults-chart.component.html',
  styleUrls: ['./buildresults-chart.component.css']
})
export class BuildresultsChartComponent implements OnInit{
  @Input() data!: BuildResult[];
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }
}
