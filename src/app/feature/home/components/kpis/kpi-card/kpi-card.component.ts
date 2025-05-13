import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ToSecondsPipe } from 'src/app/shared/pipes/to-seconds.pipe';
import { ToMinutesPipe } from 'src/app/shared/pipes/to-minutes.pipe';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [MatCardModule, ToSecondsPipe, ToMinutesPipe], // Import Material and Pipes
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.css']
})
export class KpiCardComponent {
  @Input() title!: string;
  @Input() duration!: number;
}
