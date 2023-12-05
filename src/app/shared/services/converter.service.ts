import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterConfig } from '../models/converterConfig';
import { ApiResponse } from '../models/apiResponse';
import { ConverterPath } from '../models/converterPath';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private uRL = environment.apiUrl + ':8081/converter/';

  constructor(private http: HttpClient) {}

  convertFile(converterConfig: ConverterConfig, sourceFormat: string, targetFormat: string) {
    var converterString = this.getURL(sourceFormat, targetFormat);
    return this.http.post<ApiResponse>(this.uRL + converterString, converterConfig);
  }

  postFile(config: ConverterPath){
    return this.http.post(this.uRL + 'getFile', 
      config, 
      {responseType:'blob'}
    );
  }

  uploadFile(formData: any){
    return this.http.post(this.uRL + 'upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  private getURL(sourceFormat: string, targetFormat: string): string {
    return sourceFormat + 'to' + targetFormat;
  }
}
