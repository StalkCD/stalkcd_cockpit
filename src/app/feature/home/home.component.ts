import { Component, ElementRef } from '@angular/core';
import { Characteristics } from 'src/app/shared/models/characteristics';
import { CharacteristicsConfig } from 'src/app/shared/models/characteristicsConfig';
import { CharacteristicsService } from 'src/app/shared/services/characteristics.service';
import { CommonModule } from '@angular/common';
import { BuildresultsChartComponent } from './components/charts/buildresults-chart/buildresults-chart.component';  // Adjust the path accordingly
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatButtonModule } from '@angular/material/button';

// Import your custom components (adjust the paths as needed)
import { KpiCardComponent } from './components/kpis/kpi-card/kpi-card.component';  // Adjust path for app-kpi-card
import { AvgstepdurationperstepperjobChartComponent } from './components/charts/avgstepdurationperstepperjob-chart/avgstepdurationperstepperjob-chart.component'; // Adjust path
import { CustomCardComponent } from './components/kpis/custom-card/custom-card.component';  // Adjust path for app-custom-card
import { ArrivalrateChartComponent } from './components/charts/arrivalrate-chart/arrivalrate-chart.component'; // Adjust path for app-arrivalrate-chart

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    BuildresultsChartComponent,
    MatGridListModule,
    MatCardModule,
    NgxSpinnerModule,
    MatButtonModule,
    KpiCardComponent,  // Import app-kpi-card
    AvgstepdurationperstepperjobChartComponent,  // Import app-avgstepdurationperstepperjob-chart
    CustomCardComponent,  // Import app-custom-card
    ArrivalrateChartComponent,  // Import app-arrivalrate-chart
  ]
})
export class HomeComponent {
  characteristics!: Characteristics;
  config!: CharacteristicsConfig;

  constructor(private characteristicsService: CharacteristicsService, private elementRef: ElementRef) {
    this.characteristicsService.currentCharacteristics$.subscribe({
      next: characteristics => {
        if (characteristics) this.characteristics = characteristics;
      }
    });
    this.characteristicsService.currentConfig$.subscribe({
      next: config => {
        if (config) this.config = config;
      }
    });
  }
}
