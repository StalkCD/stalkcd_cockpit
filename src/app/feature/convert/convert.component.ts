import { Component, ViewChild } from '@angular/core';
import { SourceFormatComponent } from './components/source-format/source-format.component';
import { TargetFormatComponent } from './components/target-format/target-format.component';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { ConvertConfigComponent } from './components/convert-config/convert-config.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  source: string;
  target: string;
  isDone: boolean;
  frmStepFinal: FormGroup;

  get frmStepOne() {
    return this.convertConfigComponent.frmStepOne;
  }

  get frmStepTwo() {
    return this.sourceFormatComponent.frmStepTwo;
  }

  get frmStepThree() {
    return this.targetFormatComponent.frmStepThree;
  }

  constructor(private fb: FormBuilder, private converterService: ConverterService, private toastrService: ToastrService) {
    this.source = '';
    this.target = '';
    this.sourceFormatComponent = new SourceFormatComponent(new FormBuilder());
    this.targetFormatComponent = new TargetFormatComponent(new FormBuilder());
    this.convertConfigComponent = new ConvertConfigComponent(new FormBuilder(), this.converterService);
    this.isDone = false;
    this.frmStepFinal = this.fb.group({
      newName: ['', Validators.required]
    });
  }

  getSource(source: string){
    this.source = source;
  }

  convert(){
    var sourceFormat = this.frmStepTwo.value["sourceFormat"]
    var targetFormat = this.frmStepThree.value["targetFormat"]  
    var newName = this.frmStepFinal.value["newName"];

    if(newName == ""){
      newName = this.frmStepOne.value["fileName"];
    }
    
    var path = this.frmStepOne.value["path"] + this.frmStepOne.value["fileName"] + "." + this.frmStepOne.value["format"];
    var targetPath = this.getTargetPath(targetFormat, newName);
    this.target = targetPath;

    var config: ConverterConfig = {
      source: path,
      target: targetPath
    }

    this.converterService.convertFile(config, sourceFormat, targetFormat).subscribe({
      next: () => {
        this.isDone = true;
        this.toastrService.success("File converted successfully", "Success");
      },
      error: (err) => {
        this.isDone = false;
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