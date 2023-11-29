import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  private uRL = 'http://127.0.0.1:8082/workflows';

  constructor(private httpClient: HttpClient) { }

  getWorkflows(){
    return this.httpClient.get(this.uRL);
  }
}
