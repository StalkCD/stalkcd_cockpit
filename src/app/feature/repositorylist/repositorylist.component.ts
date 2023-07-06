import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadModalComponent } from 'src/app/shared/modals/download-modal/download-modal.component';

@Component({
  selector: 'app-repositorylist',
  templateUrl: './repositorylist.component.html',
  styleUrls: ['./repositorylist.component.css']
})
export class RepositorylistComponent {
  constructor(private dialog: MatDialog) { } 

  openDownloadModal() {
    this.dialog.open(DownloadModalComponent);
  }

}
