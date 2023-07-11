import { Component, ViewChild } from '@angular/core';
import { SourceFormatComponent } from './components/source-format/source-format.component';
import { TargetFormatComponent } from './components/target-format/target-format.component';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { ConvertConfigComponent } from './components/convert-config/convert-config.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConverterConfig } from 'src/app/shared/models/converterConfig';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {
  @ViewChild(SourceFormatComponent) sourceFormatComponent: SourceFormatComponent;
  @ViewChild(TargetFormatComponent) targetFormatComponent: TargetFormatComponent;
  @ViewChild(ConvertConfigComponent) convertConfigComponent: ConvertConfigComponent;

  get frmStepOne() {
    return this.sourceFormatComponent.frmStepOne;
  }

  get frmStepTwo() {
    return this.targetFormatComponent.frmStepTwo;
  }

  get frmStepThree() {
    return this.convertConfigComponent.frmStepThree;
  }


  constructor(private converterService: ConverterService) {
    this.sourceFormatComponent = new SourceFormatComponent(new FormBuilder());
    this.targetFormatComponent = new TargetFormatComponent(new FormBuilder());
    this.convertConfigComponent = new ConvertConfigComponent(new FormBuilder());
  }

  convert(){
    var sourceFormat = this.frmStepOne.value["sourceFormat"]
    var targetFormat = this.frmStepTwo.value["targetFormat"]
    var config: ConverterConfig = {
      source: this.frmStepThree.value["sourcePath"],
      target: './res/_StalkCDYamls/test.yml'
    }

    this.converterService.convertFile(config, sourceFormat, targetFormat);
  }
}
