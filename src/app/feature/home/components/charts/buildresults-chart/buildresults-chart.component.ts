import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BuildResult } from 'src/app/shared/models/buildResult';
import { MatGridListModule } from '@angular/material/grid-list';  // Import MatGridListModule for grid layout
import { ReactiveFormsModule } from '@angular/forms';  // If needed for forms
import { NgChartsModule } from 'ng2-charts';  // Import ChartsModule for chart functionality
import { StatusNamePipe } from 'src/app/shared/pipes/status-name.pipe';  // Import the custom pipe

@Component({
  selector: 'app-buildresults-chart',
  standalone: true,  // Make this component standalone
  templateUrl: './buildresults-chart.component.html',
  styleUrls: ['./buildresults-chart.component.css'],
  imports: [
    MatGridListModule,  // Import MatGridListModule for grid layout
    ReactiveFormsModule,  // Include ReactiveFormsModule if you're using forms
    NgChartsModule,   // Import ChartsModule for chart functionality (this provides BaseChartDirective)
    StatusNamePipe   // Import the custom pipe here
  ]
})
export class BuildresultsChartComponent implements OnInit {
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
  cols = 4;

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
    if (this.buildResults.length > 4) {
      this.cols = this.buildResults.length;
    }
    this.value = this.buildResults.reduce((sum, current) => sum + current.count, 0);
  }

  buildColorArray() {
    this.buildResults.forEach(x => {
      switch (x.result) {
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
