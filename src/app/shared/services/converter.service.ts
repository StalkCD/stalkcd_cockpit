import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterConfig } from '../models/converterConfig';
import { ApiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private uRL: string = 'http://localhost:8081/converter/';

  constructor(private http: HttpClient) {}

  convertFile(converterConfig: ConverterConfig, sourceFormat: string, targetFormat: string) {
    var converterString = this.getURL(sourceFormat, targetFormat);

    return this.http.post<ApiResponse>(this.uRL + converterString, converterConfig);
  }

  private getURL(sourceFormat: string, targetFormat: string): string {
    return sourceFormat + 'to' + targetFormat;
  }
}
