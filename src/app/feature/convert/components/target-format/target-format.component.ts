import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';  // Import MatGridListModule
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule for forms

@Component({
  selector: 'app-target-format',
  standalone: true,  // Make this component standalone
  templateUrl: './target-format.component.html',
  styleUrls: ['./target-format.component.css'],
  imports: [
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule  // Import ReactiveFormsModule for form handling
  ]
})
export class TargetFormatComponent {
  @Input() sourceFormat: string;
  frmStepThree: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sourceFormat = '';
    this.frmStepThree = this.fb.group({
      targetFormat: ['', Validators.required],
    });
  }
}
