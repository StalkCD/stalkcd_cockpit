import { Component, ViewChild } from '@angular/core';
import { SourceFormatComponent } from './components/source-format/source-format.component';
import { TargetFormatComponent } from './components/target-format/target-format.component';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { ConvertConfigComponent } from './components/convert-config/convert-config.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataSourceComponent } from './components/data-source/data-source.component';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {
  @ViewChild(DataSourceComponent) dataSourceComponent: DataSourceComponent;
  @ViewChild(SourceFormatComponent) sourceFormatComponent: SourceFormatComponent;
  @ViewChild(TargetFormatComponent) targetFormatComponent: TargetFormatComponent;
  @ViewChild(ConvertConfigComponent) convertConfigComponent: ConvertConfigComponent;
  origin: string;
  source: string;
  target: string;
  isDone: boolean;

  get frmStepOne() {
    return this.dataSourceComponent.frmStepOne;
  }

  get frmStepTwo() {
    return this.convertConfigComponent.frmStepTwo;
  }

  get frmStepThree() {
    return this.sourceFormatComponent.frmStepThree;
  }

  get frmStepFour() {
    return this.targetFormatComponent.frmStepFour;
  }


  constructor(private converterService: ConverterService, private toastrService: ToastrService) {
    this.origin = '';
    this.source = '';
    this.target = '';
    this.dataSourceComponent = new DataSourceComponent(new FormBuilder());
    this.sourceFormatComponent = new SourceFormatComponent(new FormBuilder());
    this.targetFormatComponent = new TargetFormatComponent(new FormBuilder());
    this.convertConfigComponent = new ConvertConfigComponent(new FormBuilder());
    this.isDone = false;

  }

  getSource(source: string){
    this.source = source;
  }

  getOrigin(origin: string){
    this.origin = origin;
  }

  convert(){
    var sourceFormat = this.frmStepThree.value["sourceFormat"]
    var targetFormat = this.frmStepFour.value["targetFormat"]  
    // var targetPath = this.getTargetPath(targetFormat, this.frmStepThree.value["targetName"]);
    // this.target = targetPath;


    // var config: ConverterConfig = {
    //   source: this.frmStepThree.value["sourcePath"],
    //   target: targetPath
    // }

    // this.converterService.convertFile(config, sourceFormat, targetFormat).subscribe({
    //   next: () => {
    //     this.isDone = true;
    //     this.toastrService.success("File converted successfully", "Success");
    //   },
    //   error: (err) => {
    //     this.toastrService.error(err.error.message, "Error");
    //   }
    // });
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