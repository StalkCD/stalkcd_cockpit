import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DownloadConfig } from 'src/app/shared/models/downloadConfig';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private uRL = 'http://localhost:8001/download/';

  constructor(private http: HttpClient) { }

  downloadHistoryData(downloadConfig: DownloadConfig){
    return this.http.post<string>(this.uRL, downloadConfig);
  }
}
