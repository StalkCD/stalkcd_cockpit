import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InformationModalComponent } from 'src/app/shared/modals/information-modal/information-modal.component';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent {
  @Input() stepsFailed!: any[];
  @Input() jobsFailed!: any[];

  constructor(private dialog: MatDialog) { }

  openInformationModal(elements: any[]) {
    this.dialog.open(InformationModalComponent, {
      data: elements
    });
    console.log(elements);
  }

}
