import { trigger, state, animate, style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';  // Import MatDialogModule for dialogs
import { MatTableModule } from '@angular/material/table';    // Import MatTableModule for table features
import { RouterModule } from '@angular/router';              // Import RouterModule for routing
import { CommonModule } from '@angular/common';              // Import CommonModule for ngIf, ngFor, etc.

import { DownloadModalComponent } from 'src/app/shared/modals/download-modal/download-modal.component';
import { CharacteristicsConfig } from 'src/app/shared/models/characteristicsConfig';
import { Workflow } from 'src/app/shared/models/workflow';
import { CharacteristicsService } from 'src/app/shared/services/characteristics.service';
import { WorkflowService } from 'src/app/shared/services/workflow.service';

import { NgxSpinnerModule } from "ngx-spinner";
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-repositorylist',
  templateUrl: './repositorylist.component.html',
  styleUrls: ['./repositorylist.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,  // Enable standalone component
  imports: [
    CommonModule, 
    MatDialogModule, 
    MatTableModule, 
    RouterModule,
    MatIconModule,        // <-- Import für <mat-icon>
    MatCheckboxModule,    // <-- Import für <mat-checkbox>
    MatInputModule,       // <-- Import für <input matInput>
    MatFormFieldModule,   // <-- Import für <mat-form-field>
    NgxSpinnerModule,      // <-- Import für <ngx-spinner>
    FormsModule
  ]  // Import necessary modules
})
export class RepositorylistComponent implements OnInit {
  datasource = new MatTableDataSource<Workflow>();
  columnsToDisplay = ['name', 'repoName', 'state', 'downloadDate', 'downloaded'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'analyze', 'expand'];
  expandedElement: Workflow | null | undefined;
  isChecked: boolean = false;

  constructor(
    private workflowService: WorkflowService,
    private dialog: MatDialog,
    private characteristicsService: CharacteristicsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getWorkflows();
  }

  getWorkflows() {
    this.workflowService.getWorkflows().subscribe(
      (response: any) => {
        this.datasource.data = this.createWorkflowObject(response);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase()
  }

  onlyDownloaded(){
    if(this.isChecked){
      this.datasource.filter = "true";
    }else{
      this.datasource.filter = "";
    }
  }

  getCharacteristics(workflow: Workflow) {
    var characteristicsConfig: CharacteristicsConfig = {
      repoName: workflow.repoName,
      workflowName: workflow.name,
      loadFrom: 'db'
    }

    this.characteristicsService.getCharacteristics(characteristicsConfig).subscribe(
      (data) => {
        this.router.navigate(['/home']);
      }
    );
  }

  openDownloadModal() {
    this.dialog.open(DownloadModalComponent);
  }

  createWorkflowObject(workflows: any[]): Workflow[] {
    var result: Workflow[] = [];
    
    workflows.forEach(element => {
      var workflow: Workflow = {
        repoName: element.repoName,
        downloaded: element.downloaded,
        downloadDate: element.downloadDate,
        id: element.workflowDescription.id,
        name: element.workflowDescription.name,
        node_id: element.workflowDescription.node_id,
        path: element.workflowDescription.path,
        state: element.workflowDescription.state,
        created_at: element.workflowDescription.created_at,
        updated_at: element.workflowDescription.updated_at,
        url: element.workflowDescription.url,
        html_url: element.workflowDescription.html_url,
        badge_url: element.workflowDescription.badge_url
      }
      result.push(workflow);
    });

    return result;
  }
}