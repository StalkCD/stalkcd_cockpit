import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType  } from 'chart.js';
import { BuildResult } from 'src/app/shared/models/buildResult';


@Component({
  selector: 'app-buildresults-chart',
  templateUrl: './buildresults-chart.component.html',
  styleUrls: ['./buildresults-chart.component.css']
})
export class BuildresultsChartComponent implements OnInit{
  @Input() buildResults!: BuildResult[];
  
  public chartLabels: string[] = [];
  public chartData: ChartData<'doughnut'> = {
    datasets: [
      { data: [] }
      ]
  };
  public chartType: ChartType = 'doughnut';
  public chartOptions = {
    legend: {
      display: false
    },
    responsive: true,
    cutout: '70%',
  };
  public chartLegend = true;
  public value = 0;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
     this.chartLabels = this.buildResults.map(x => x.result);
     this.chartData = {
      datasets: [
        { data: this.buildResults.map(x => x.count) }
      ]
     };
     this.value = this.buildResults.reduce((sum, current) => sum + current.count, 0);
  }
}