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
    maintainAspectRatio: false,
    scales: {
      x: {
        grid:{
          display: false,
        },
        ticks: {
          color: '#212121',
          callback(value, index){
            var label = this.getLabelForValue(index).split("/");
            var year = label[0];
            var month = label[1];
            var day = label[2];

            var formatedDate = day +"."+ month +"."+ year;
            return formatedDate;
          }
        }
      },
      y: {
        ticks: {
          color: '#212121'
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
          backgroundColor: 'rgba(179,229,252,0.3)',
          borderColor: '#0288d1',
          pointBackgroundColor: '#CDDC39',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#0288D1',
          fill: {
            target: 'origin',
          }
        }],
      labels: data.map(x => x.date)
    };
  }

}
