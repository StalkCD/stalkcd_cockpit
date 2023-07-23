import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-target-format',
  templateUrl: './target-format.component.html',
  styleUrls: ['./target-format.component.css']
})
export class TargetFormatComponent{
  @Input() sourceFormat: string;
  frmStepFour: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sourceFormat = '';
    this.frmStepFour = this.fb.group({
      targetFormat: ['', Validators.required],
    });
  }
}
