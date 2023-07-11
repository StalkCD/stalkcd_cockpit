import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-source-format',
  templateUrl: './source-format.component.html',
  styleUrls: ['./source-format.component.css']
})
export class SourceFormatComponent {
  frmStepOne: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmStepOne = this.fb.group({
      sourceFormat: ['', Validators.required],
    });
  }
}
