import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../../services/download.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DownloadConfig } from '../../models/downloadConfig';
import { Router } from '@angular/router';
import { CharacteristicsConfig } from '../../models/characteristicsConfig';
import { CharacteristicsService } from '../../services/characteristics.service';

@Component({
  selector: 'app-download-modal',
  templateUrl: './download-modal.component.html',
  styleUrls: ['./download-modal.component.css']
})
export class DownloadModalComponent implements OnInit{
  downloadForm: FormGroup = new FormGroup({});
  config!: DownloadConfig;
  isDone: boolean = false;
  wasSuccessful!: boolean;
  characteristicsConfig!: CharacteristicsConfig;

  constructor(private formBuilder: FormBuilder, private downloadService: DownloadService, private characteristicsService: CharacteristicsService, private router: Router) { }

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm() {
    this.downloadForm = this.formBuilder.group({
      repoName: ['', Validators.required],
      repoOwner: ['', Validators.required],
      workflowName: ['', Validators.required],
      gitHubToken: ['', Validators.required],
      saveTo: ['db', Validators.required],
      depth: ['', Validators.required],
      pages: ['', Validators.required]
    });
  }

  downloadRepository(){
    this.config = {...this.downloadForm?.value};
    this.config.depth = parseInt(this.downloadForm.controls['depth'].value,10);

    this.downloadService.downloadHistoryData(this.config).subscribe({
      next: () => {
        this.isDone = true;
        this.wasSuccessful = true;
      },
      error: (err) => {
        this.isDone = true;
        this.wasSuccessful = false;
      }
    });
  }

  getCharacteristics() {
    this.characteristicsConfig = {
      repoName: this.config.repoName,
      workflowName: this.config.workflowName,
      loadFrom: 'db'
    }

    this.characteristicsService.getCharacteristics(this.characteristicsConfig).subscribe(
      (data) => {
        this.router.navigate(['/home']);
      }
    );
  }
}
