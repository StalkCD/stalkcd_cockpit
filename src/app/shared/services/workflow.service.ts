import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  private uRL = 'http://localhost:8082/workflows';

  constructor(private httpClient: HttpClient) { }

  getWorkflows(){
    return this.httpClient.get(this.uRL);
  }
}
