import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';  // <-- Import NgChartsModule
import { PipelineStep } from 'src/app/shared/models/pipelineStep';

@Component({
  selector: 'app-avgstepdurationperstepperjob-chart',
  standalone: true,
  templateUrl: './avgstepdurationperstepperjob-chart.component.html',
  styleUrls: ['./avgstepdurationperstepperjob-chart.component.css'],
  imports: [NgChartsModule]  // <-- Add NgChartsModule here
})
export class AvgstepdurationperstepperjobChartComponent implements OnInit, OnChanges {
  @Input() pipelineSteps!: PipelineStep[];

  data: any[] = [];
  public lineChartType: ChartType;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
      }
    ],
    labels: []
  };
  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#212121',
          callback(value, index) {
            var label = this.getLabelForValue(index);
            if (label.length > 6) {
              return label.substring(0, 6) + "...";
            } else {
              return label;
            }
          }
        }
      },
      y: {
        ticks: {
          color: '#212121',
          callback(value, index) {
            return value + "s";
          }
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            var label = context.dataset.label + ': ' + context.dataset['data'][context.dataIndex] + 's';
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
    if (this.pipelineSteps) {
      this.createChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pipelineSteps'] && this.pipelineSteps) {
      this.createChart();  // Recreate the chart if pipelineSteps input changes
    }
  }

  createChart() {
    if (this.pipelineSteps && this.pipelineSteps.length > 0) {
      const data = this.pipelineSteps.reverse();
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
          }
        ],
        labels: data.map(x => x.step)
      };
    }
  }

  private toSeconds(duration: number): number {
    var seconds = duration / 1000;
    return Number(seconds.toFixed(2));
  }
}
