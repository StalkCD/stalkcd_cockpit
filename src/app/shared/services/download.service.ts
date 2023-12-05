import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DownloadConfig } from 'src/app/shared/models/downloadConfig';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  // URL for productive environment
  private uRL = 'http://18.193.68.144:8082/download/';

  constructor(private http: HttpClient) { }

  downloadHistoryData(downloadConfig: DownloadConfig){
    return this.http.post<ApiResponse>(this.uRL, downloadConfig);
  }
}
