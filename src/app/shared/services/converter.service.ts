import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterConfig } from '../models/converterConfig';
import { ApiResponse } from '../models/apiResponse';
import { ConverterPath } from '../models/converterPath';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private uRL: string = 'http://localhost:8081/converter/';

  constructor(private http: HttpClient) {}

  convertFile(converterConfig: ConverterConfig, sourceFormat: string, targetFormat: string) {
    var converterString = this.getURL(sourceFormat, targetFormat);

    console.log(converterString);

    return this.http.post<ApiResponse>(this.uRL + converterString, converterConfig);
  }

  getFile(config: ConverterPath){
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
