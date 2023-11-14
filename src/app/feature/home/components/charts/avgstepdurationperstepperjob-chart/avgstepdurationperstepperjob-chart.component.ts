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

  data: any[] = [];
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
    scales: {
      x: {
        grid:{
          display: false
        },
        ticks: {
          color: '#212121',
          callback(value, index){
            var label = this.getLabelForValue(index);
            if(label.length > 6) {
              return label.substring(0, 6) + "...";
            }else{
              return label;
            }
          }
        }
      },
      y: {
        ticks: {
          color: '#212121',
          callback(value, index){
            return value + "s";
          }
        },
      }
    },
    plugins: {
      legend: { display: false },
      tooltip:{
        callbacks:{
          label: (context) => {
            var label = context.dataset.label + ': ' + context.dataset['data'][context.dataIndex]+ 's';
            return label;
          }
        }
      }
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
          label: 'Step Duration',
          backgroundColor: 'rgba(179,229,252,0.3)',
          borderColor: '#CDDC39',
          pointBackgroundColor: '#0288d1',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#CDDC39',
        }],
      labels: data.map(x => x.step)
    };
  }

  private toSeconds(duration: number): number {
    var seconds = duration / 1000;  
    return Number(seconds.toFixed(2));
  }
}
