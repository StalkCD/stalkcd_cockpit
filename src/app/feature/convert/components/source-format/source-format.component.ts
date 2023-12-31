import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-source-format',
  templateUrl: './source-format.component.html',
  styleUrls: ['./source-format.component.css']
})
export class SourceFormatComponent {
  frmStepTwo: FormGroup;
  @Output() source = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.frmStepTwo = this.fb.group({
      sourceFormat: ['', Validators.required],
    });
  }

  setSource(){
    this.source.emit(this.frmStepTwo.value["sourceFormat"]);
  }
}
