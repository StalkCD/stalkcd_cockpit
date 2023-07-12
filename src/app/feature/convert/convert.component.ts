import { Component, ViewChild } from '@angular/core';
import { SourceFormatComponent } from './components/source-format/source-format.component';
import { TargetFormatComponent } from './components/target-format/target-format.component';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { ConvertConfigComponent } from './components/convert-config/convert-config.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConverterConfig } from 'src/app/shared/models/converterConfig';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {
  @ViewChild(SourceFormatComponent) sourceFormatComponent: SourceFormatComponent;
  @ViewChild(TargetFormatComponent) targetFormatComponent: TargetFormatComponent;
  @ViewChild(ConvertConfigComponent) convertConfigComponent: ConvertConfigComponent;
  source: string;
  isDone:boolean;

  get frmStepOne() {
    return this.sourceFormatComponent.frmStepOne;
  }

  get frmStepTwo() {
    return this.targetFormatComponent.frmStepTwo;
  }

  get frmStepThree() {
    return this.convertConfigComponent.frmStepThree;
  }


  constructor(private converterService: ConverterService, private toastrService: ToastrService) {
    this.source = '';
    this.sourceFormatComponent = new SourceFormatComponent(new FormBuilder());
    this.targetFormatComponent = new TargetFormatComponent(new FormBuilder());
    this.convertConfigComponent = new ConvertConfigComponent(new FormBuilder());
    this.isDone = false;
  }

  getSource(source: string){
    this.source = source;
  }

  convert(){
    var sourceFormat = this.frmStepOne.value["sourceFormat"]
    var targetFormat = this.frmStepTwo.value["targetFormat"]
    var targetPath = this.getTargetPath(targetFormat, this.frmStepThree.value["targetName"]);
    
    var config: ConverterConfig = {
      source: this.frmStepThree.value["sourcePath"],
      target: targetPath
    }

    this.converterService.convertFile(config, sourceFormat, targetFormat).subscribe({
      next: () => {
        this.isDone = true;
        this.toastrService.success("File converted successfully", "Success");
      },
      error: (err) => {
        this.toastrService.error(err.error.message, "Error");
      }
    });
  }

  private getTargetPath(targetFormat: string, targetName: string): string{
    var path = "";
    if(targetFormat == "stalkcd"){
      path = "./res/_StalkCDYamls/"+targetName +".yml";
    }else if(targetFormat == "jenkins"){
      path = "./res/_JenkinsFiles/"+targetName +".Jenkinsfile";
    }else if(targetFormat == "githubactions"){
      path = "./res/_GitHubActionsFiles/"+targetName +".yml";
    }else if(targetFormat == "bpmn"){
      path = "./res/_BPMNFiles/"+targetName +".bpmn";
    }

    return path;
  }
}