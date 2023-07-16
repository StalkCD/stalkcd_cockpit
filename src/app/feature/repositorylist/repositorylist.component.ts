import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DownloadModalComponent } from 'src/app/shared/modals/download-modal/download-modal.component';
import { WorkflowService } from 'src/app/shared/services/workflow.service';

@Component({
  selector: 'app-repositorylist',
  templateUrl: './repositorylist.component.html',
  styleUrls: ['./repositorylist.component.css']
})
export class RepositorylistComponent implements OnInit{
  constructor(private workflowService: WorkflowService,private dialog: MatDialog) { } 

  ngOnInit(): void {
    this.getWorkflows();
  }

  getWorkflows() {
    this.workflowService.getWorkflows().subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

  openDownloadModal() {
    this.dialog.open(DownloadModalComponent);
  }

}
