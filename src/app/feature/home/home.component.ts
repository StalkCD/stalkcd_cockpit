import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadModalComponent } from 'src/app/shared/modals/download-modal/download-modal.component';
import { Characteristics } from 'src/app/shared/models/characteristics';
import { CharacteristicsConfig } from 'src/app/shared/models/characteristicsConfig';
import { CharacteristicsService } from 'src/app/shared/services/characteristics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private charConfig: CharacteristicsConfig = {
    repoName: 'hibernate-orm',
    workflowName: 'CodeQL',
    loadFrom: 'local'
  }
  characteristics!: Characteristics;

  constructor(public dialog: MatDialog, private characteristicsService: CharacteristicsService) {}

  ngOnInit(): void {
    this.characteristicsService.getCharacteristics(this.charConfig).subscribe((data) => {
      console.log(data);
      this.characteristics = data;
      console.log(this.characteristics);
    });
  }

  openDownloadModal() {
    this.dialog.open(DownloadModalComponent);
  }
}
