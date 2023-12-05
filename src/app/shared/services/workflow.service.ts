import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  private uRL = environment.apiUrl + ':8082/workflows';

  constructor(private httpClient: HttpClient) { }

  getWorkflows(){
    return this.httpClient.get(this.uRL);
  }
}
