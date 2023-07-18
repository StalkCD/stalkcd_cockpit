import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { PipelineStep } from 'src/app/shared/models/pipelineStep';

@Component({
  selector: 'app-avgstepdurationperstepperjob-chart',
  templateUrl: './avgstepdurationperstepperjob-chart.component.html',
  styleUrls: ['./avgstepdurationperstepperjob-chart.component.css']
})
export class AvgstepdurationperstepperjobChartComponent implements OnInit{
  @Input() pipelineSteps!: PipelineStep[];

  public lineChartType: ChartType;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
      }],
    labels: []
  };

  // public config: ChartConfiguration = {
  //   type: 'line',
  //   data: data,
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Line Chart'
  //       }
  //     }
  //   },
  // };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
    plugins: {
      legend: { display: false },
    }
  };

  constructor() {
    this.lineChartType = 'line';
  }
  ngOnInit(): void {
    this.createChart();
  }


  createChart() {
    var data = this.pipelineSteps.reverse();
    
    this.lineChartData = {
      datasets: [
        {
          data: data.map(x => x.avgDur),
          label: 'Arrival Rate',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'blue',
          pointBackgroundColor: 'rgba(255,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        }],
      labels: data.map(x => x.step)
    };
  }
}
