import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterConfig } from '../models/converterConfig';
import { ApiResponse } from '../models/apiResponse';
import { ConverterPath } from '../models/converterPath';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private convertURL: string = 'http://localhost:8081/converter/';
  private downloadURL: string = 'http://localhost:8081/download/';

  constructor(private http: HttpClient) {}

  convertFile(converterConfig: ConverterConfig, sourceFormat: string, targetFormat: string) {
    var converterString = this.getURL(sourceFormat, targetFormat);

    return this.http.post<ApiResponse>(this.convertURL + converterString, converterConfig);
  }

  // TODO: tutorila umsetzen, wennd er Zugriff mit der DB funktioniert
  downloadFile(config: ConverterPath){
    // Siehe https://ramya-bala221190.medium.com/downloading-a-file-using-node-and-angular-b9eb32dd5ad5
    return this.http.post(this.downloadURL, config);
  }

  // TODO: muss im backend programmiert werden
  uploadFile(formData: any){
    return this.http.post(this.convertURL + 'upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  private getURL(sourceFormat: string, targetFormat: string): string {
    return sourceFormat + 'to' + targetFormat;
  }
}
