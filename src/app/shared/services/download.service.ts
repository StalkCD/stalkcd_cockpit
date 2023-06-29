import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DownloadConfig } from 'src/app/shared/models/downloadConfig';
import { BusyService } from './busy.service';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private uRL = 'http://localhost:8001/download/';

  constructor(private http: HttpClient, private busyService: BusyService) { }

  // TODO: nochmal überarbeiten, da der spinner auch abgebrochen werdne muss, wenn es keine reponse gibt +  was macht der Interceptor ??

  downloadHistoryData(downloadConfig: DownloadConfig){
    this.busyService.busy();
    return this.http.post<ApiResponse>(this.uRL, downloadConfig).subscribe(
      (data) => {
        console.log(data);
        this.busyService.idle();
      }
    );
  }
}
