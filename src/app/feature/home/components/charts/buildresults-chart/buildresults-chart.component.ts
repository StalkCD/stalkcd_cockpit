import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BuildResult } from 'src/app/shared/models/buildResult';

@Component({
  selector: 'app-buildresults-chart',
  templateUrl: './buildresults-chart.component.html',
  styleUrls: ['./buildresults-chart.component.css']
})
export class BuildresultsChartComponent implements OnInit{
  @Input() buildResults!: BuildResult[];
  private colorArray: string[] = [];
  
  public chartData: ChartData<'doughnut'> = {
    datasets: [
      { data: [] }
      ]
  };
  public chartLabels: string[] = [];
  public chartType: ChartType = 'doughnut';
  public chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    cutout: '70%',
  };

  public value = 0;

  constructor() {}

  ngOnInit(): void {
    this.buildColorArray();
    this.createChart();
  }

  createChart() {
    this.chartLabels = this.buildResults.map(x => x.result);
    this.chartData = {
      labels: this.buildResults.map(x => x.result),
      datasets: [
        { 
          data: this.buildResults.map(x => x.count),
          backgroundColor: this.colorArray
        }
      ]
    };
    this.value = this.buildResults.reduce((sum, current) => sum + current.count, 0);
  }

  buildColorArray(){
    this.buildResults.forEach(x => {
      switch(x.result){
        case 'success':
          this.colorArray.push('#4BB543');
          break;
        case 'failure':
          this.colorArray.push('#FC100D');
          break;
        case 'action_required':
          this.colorArray.push('#FFCC00');
          break;
        case 'cancelled':
          this.colorArray.push('#dcdcdc');
          break;
        default:
          this.colorArray.push('#15868a');
          break;
      }
    });
  }
}