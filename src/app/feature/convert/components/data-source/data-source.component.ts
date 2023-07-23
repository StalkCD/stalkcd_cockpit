import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.css']
})
export class DataSourceComponent {
  frmStepOne: FormGroup;
  @Output() origin = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.frmStepOne = this.fb.group({
      sourceOrigin: ['', Validators.required],
    });
  }

  setOrigin(){
    this.origin.emit(this.frmStepOne.value["sourceOrigin"]);
  }
}
