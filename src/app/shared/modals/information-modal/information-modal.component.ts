import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// ✅ Import the necessary Angular Material modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-information-modal',
  standalone: true,  // ✅ Make this component standalone
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.css'],
  imports: [
    MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, NgIf
  ]  // ✅ Add Angular Material modules for dialog and button components
})
export class InformationModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any[]) { }
}
