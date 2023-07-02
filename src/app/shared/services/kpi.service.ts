import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kpis } from 'src/app/shared/models/kpis';
import { KpisConfig } from '../models/kpisConfig';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private uRL = 'http://localhost:8082/kpis/';

  constructor(private http: HttpClient) { }

  getKpis(kpisConfig: KpisConfig){
    return this.http.post<Kpis>(this.uRL, kpisConfig);
  }
}