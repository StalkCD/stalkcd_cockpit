import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-source-format',
  standalone: true,
  templateUrl: './source-format.component.html',
  styleUrls: ['./source-format.component.css'],
  imports: [
    ReactiveFormsModule,   // Import ReactiveFormsModule for form handling
    MatCardModule,         // Import MatCardModule for using mat-card
    MatGridListModule,     // Import MatGridListModule for using mat-grid-list
  ]
})
export class SourceFormatComponent {
  frmStepTwo: FormGroup;
  @Output() source = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.frmStepTwo = this.fb.group({
      sourceFormat: ['', Validators.required],
    });
  }

  setSource() {
    this.source.emit(this.frmStepTwo.value["sourceFormat"]);
  }
}

