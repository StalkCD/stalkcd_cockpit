import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  // URL for productive environment
  private uRL = 'http://18.193.68.144:8082/workflows';

  constructor(private httpClient: HttpClient) { }

  getWorkflows(){
    return this.httpClient.get(this.uRL);
  }
}
