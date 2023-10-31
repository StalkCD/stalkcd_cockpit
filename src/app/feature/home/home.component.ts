import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Characteristics } from 'src/app/shared/models/characteristics';
import { CharacteristicsService } from 'src/app/shared/services/characteristics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  characteristics!: Characteristics;

  constructor(private characteristicsService: CharacteristicsService, private elementRef: ElementRef) {
    this.characteristicsService.currentCharacteristics$.subscribe({
      next: characteristics => {
        if (characteristics) this.characteristics = characteristics;
      }
    });
  }
}
