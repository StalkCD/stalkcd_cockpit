import { Component } from '@angular/core';
import { DownloadConfig } from 'src/app/shared/models/downloadConfig';
import { DownloadService } from 'src/app/shared/services/download.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {
  config: DownloadConfig = {
    repoName: 'hibernate-orm',
    repoOwner: 'hibernate',
    workflowName: 'CodeQL',
    gitHubToken: 'TOken',
    saveTo: 'local'
  };

  constructor(private downloadService: DownloadService){}

  downloadRepo(){
    this.downloadService.downloadHistoryData(this.config);
  }

}
