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
  characteristics = new Characteristics(0, [], []);

  constructor(public dialog: MatDialog, private characteristicsService: CharacteristicsService) {}

  ngOnInit(): void {
    this.characteristicsService.getCharacteristics(this.charConfig).subscribe((data) => {
      
      // this.characteristics.avgBuildDuration = data.avgBuildDuration;
      // this.characteristics.arrivalRate = data.arrivalRate;
      // this.characteristics.buildResults = data.buildResults;

      this.characteristics = data;
    });
  }

  openDownloadModal() {
    this.dialog.open(DownloadModalComponent);
  }
}
