import { Component } from '@angular/core';
import { CharacteristicsService } from './shared/services/characteristics.service';
import { Characteristics } from './shared/models/characteristics';
import { CharacteristicsConfig } from './shared/models/characteristicsConfig';
import { HeaderComponent } from './core/components/header/header.component'; // Import HeaderComponent
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,  // Mark it as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, RouterModule],  // Add HeaderComponent and RouterModule to imports
})
export class AppComponent {
  title = 'stalkCD_client';

  constructor(private characteristicsService: CharacteristicsService) { }

  ngOnInit(): void {
    this.setCurrentCharacteristics();
  }

  setCurrentCharacteristics() {
    const charString = localStorage.getItem('characteristics');
    const charConfigString = localStorage.getItem('characteristicsConfig');
    if (!charString || !charConfigString) {
      return;
    }
    const characteristics: Characteristics = JSON.parse(charString);
    const characteristicsConfig: CharacteristicsConfig = JSON.parse(charConfigString);
    this.characteristicsService.setCurrentCharacteristics(characteristics, characteristicsConfig);
  }
}
