import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../../services/download.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DownloadConfig } from '../../models/downloadConfig';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent implements OnInit{
  downloadForm: FormGroup = new FormGroup({});
  config!: DownloadConfig;
  isDone = false;

  constructor(private formBuilder: FormBuilder, private downloadService: DownloadService, private toastrService: ToastrService) { }

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm() {
    this.downloadForm = this.formBuilder.group({
      repoName: ['', Validators.required],
      repoOwner: ['', Validators.required],
      workflowName: ['', Validators.required],
      gitHubToken: ['', Validators.required],
      saveTo: ['', Validators.required],
    });
  }

  downloadRepository(){
    this.config = {...this.downloadForm?.value};
    this.downloadService.downloadHistoryData(this.config).subscribe({
      next: () => {
        this.isDone = true;
        this.toastrService.success("Repository downloaded successfully", "Success");
      },
      error: (err) => {
        this.toastrService.error(err.error.message, "Error");
      }
    });
  }
}
