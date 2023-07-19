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
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
          data: data.map(x => this.toSeconds(x.avgDur)),
          label: 'Avg. Duration',
          borderColor: 'blue',
          pointBackgroundColor: 'rgba(255,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }],
      labels: data.map(x => this.shortenText(x.step))
    };
  }

  private toSeconds(duration: number): number {
    var seconds = duration / 1000;  
    return Number(seconds.toFixed(2));
  }

  private shortenText(text: string): string {
    var length = 6;
    return text.length > length ? text.substring(0, length) + "..." : text;
  }
}
