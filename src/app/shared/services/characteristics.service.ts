import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characteristics } from 'src/app/shared/models/characteristics';
import { CharacteristicsConfig } from '../models/characteristicsConfig';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {
  private uRL = 'http://localhost:8082/characteristics/';

  constructor(private http: HttpClient) { }

  getCharacteristics(characteristicsConfig: CharacteristicsConfig){
    return this.http.post<Characteristics>(this.uRL, characteristicsConfig);
  }
}