import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characteristics } from 'src/app/shared/models/characteristics';
import { CharacteristicsConfig } from '../models/characteristicsConfig';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { local } from 'd3';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicsService {
  private uRL = environment.apiUrl + ':8082/characteristics/';
  private currentCharacteristicsSource = new BehaviorSubject<Characteristics | null>(null);
  private currentConfigSource = new BehaviorSubject<CharacteristicsConfig | null>(null);

  currentCharacteristics$ = this.currentCharacteristicsSource.asObservable();
  currentConfig$ = this.currentConfigSource.asObservable();
  
  constructor(private http: HttpClient) { }

  getCharacteristics(characteristicsConfig: CharacteristicsConfig){
    return this.http.post<Characteristics>(this.uRL, characteristicsConfig).pipe(
      map(characteristics => {
        if (characteristics){
          this.setCurrentCharacteristics(characteristics, characteristicsConfig);
        }else{
          console.log('Error: No data received');
        }
      })
    );
  }

  setCurrentCharacteristics(characteristics: Characteristics, config: CharacteristicsConfig){
    localStorage.setItem('characteristicsConfig', JSON.stringify(config));
    localStorage.setItem('characteristics', JSON.stringify(characteristics));
    this.currentCharacteristicsSource.next(characteristics);
    this.currentConfigSource.next(config);
  }
}