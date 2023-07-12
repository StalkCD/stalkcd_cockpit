import { Component, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-convert-config',
  templateUrl: './convert-config.component.html',
  styleUrls: ['./convert-config.component.css']
})
export class ConvertConfigComponent{
  frmStepThree: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmStepThree = this.fb.group({
      sourcePath: ['', Validators.required],
      targetName: ['', Validators.required],
    });
  }
}
