import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-target-format',
  templateUrl: './target-format.component.html',
  styleUrls: ['./target-format.component.css']
})
export class TargetFormatComponent{
  frmStepTwo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmStepTwo = this.fb.group({
      targetFormat: ['', Validators.required],
    });
  }
}
