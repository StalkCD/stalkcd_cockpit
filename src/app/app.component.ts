import { Component, OnInit } from '@angular/core';
import { CharacteristicsService } from './shared/services/characteristics.service';
import { Characteristics } from './shared/models/characteristics';
import { CharacteristicsConfig } from './shared/models/characteristicsConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stalkCD_client';

  constructor(private characteristicsService: CharacteristicsService) { }

  ngOnInit(): void {
    this.setCurrentCharacteristics();
  }

  setCurrentCharacteristics(){
    const charString = localStorage.getItem('characteristics');
    if(!charString) {
      return;
    }
    const characteristics: Characteristics = JSON.parse(charString);
    this.characteristicsService.setCurrentCharacteristics(characteristics);
  }
}
