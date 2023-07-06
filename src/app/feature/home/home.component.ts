import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadModalComponent } from 'src/app/shared/modals/download-modal/download-modal.component';
import { Characteristics } from 'src/app/shared/models/characteristics';
import { CharacteristicsService } from 'src/app/shared/services/characteristics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  characteristics!: Characteristics;

  constructor(public dialog: MatDialog, private characteristicsService: CharacteristicsService) {
    this.characteristicsService.currentCharacteristics$.subscribe({
      next: characteristics => {
        if (characteristics) this.characteristics = characteristics;
      }
    });
  }

  openDownloadModal() {
    this.dialog.open(DownloadModalComponent);
  }
}
