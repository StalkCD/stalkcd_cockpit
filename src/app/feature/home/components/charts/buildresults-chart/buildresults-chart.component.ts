import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buildresults-chart',
  templateUrl: './buildresults-chart.component.html',
  styleUrls: ['./buildresults-chart.component.css']
})
export class BuildresultsChartComponent{
  @Input() data!: Object[];

  public barChartOptions = {
    legend:{
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
      borderWidth: 1,
      borderColor: "#eeeeee",
      backgroundColor: "#ffffff",
      titleFontColor: "#43436B",
      bodyFontColor: "#A1A1B5",
      footerFontColor: "#A1A1B5"
    }
  };

  public barChartLabels = [];
  public barChartType = "doughnut";
  public barChartLegend = true;
  public barChartData = [];
  public value = 0;
  public labels = [];

  constructor() { }
}
