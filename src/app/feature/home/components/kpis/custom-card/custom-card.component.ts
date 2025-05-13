import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationModalComponent } from 'src/app/shared/modals/information-modal/information-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { CountElementsPipe } from 'src/app/shared/pipes/count-elements.pipe'; // Import the Pipe

@Component({
  selector: 'app-custom-card',
  standalone: true, // Ensure this is marked as standalone
  imports: [MatCardModule, MatGridListModule, NgIf, NgFor, NgClass, CountElementsPipe], 
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent {
  @Input() stepsFailed!: any[];
  @Input() jobsFailed!: any[];

  constructor(private dialog: MatDialog) {}

  openInformationModal(elements: any[]) {
    this.dialog.open(InformationModalComponent, {
      data: elements
    });
  }
}
