import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DownloadConfig } from 'src/app/shared/models/downloadConfig';
import { ApiResponse } from '../models/apiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private uRL = environment.apiUrl + ':8082/download/';

  constructor(private http: HttpClient) { }

  downloadHistoryData(downloadConfig: DownloadConfig){
    return this.http.post<ApiResponse>(this.uRL, downloadConfig);
  }
}
