import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { ArrivalRate } from 'src/app/shared/models/arrivalRate';

@Component({
  selector: 'app-arrivalrate-chart',
  templateUrl: './arrivalrate-chart.component.html',
  styleUrls: ['./arrivalrate-chart.component.css']
})
export class ArrivalrateChartComponent implements OnInit{
  @Input() arrivalRate!: ArrivalRate[];

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
      }],
    labels: []
  };

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

  public lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    var data = this.arrivalRate.reverse();
    this.lineChartData = {
      datasets: [
        {
          data: data.map(x => x.count),
          label: 'Arrival Rate',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'blue',
          pointBackgroundColor: 'rgba(255,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        }],
      labels: data.map(x => x.date)
    };
  }

}