import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceFormatComponent } from './components/source-format/source-format.component';
import { TargetFormatComponent } from './components/target-format/target-format.component';
import { ConvertConfigComponent } from './components/convert-config/convert-config.component';
import { ConvertSuccessComponent } from './components/convert-success/convert-success.component';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConverterConfig } from 'src/app/shared/models/converterConfig';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';  // Import MatGridListModule
import { MatCardModule } from '@angular/material/card';  // Import MatCardModule
import { MatStepperModule } from '@angular/material/stepper';  // Import MatStepperModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-convert',
  standalone: true,
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    SourceFormatComponent,
    TargetFormatComponent,
    ConvertConfigComponent,
    ConvertSuccessComponent,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule 
  ]
})
export class ConvertComponent {
  @ViewChild(SourceFormatComponent) sourceFormatComponent!: SourceFormatComponent;
  @ViewChild(TargetFormatComponent) targetFormatComponent!: TargetFormatComponent;
  @ViewChild(ConvertConfigComponent) convertConfigComponent!: ConvertConfigComponent;
  
  source: string = '';
  target: string = '';
  isDone: boolean = false;
  frmStepFinal: FormGroup;
  success: boolean = false;

  constructor(private fb: FormBuilder, private converterService: ConverterService, private toastrService: ToastrService) {
    this.frmStepFinal = this.fb.group({
      newName: ['', Validators.required]
    });
  }

  get frmStepOne() {
    return this.convertConfigComponent.frmStepOne;
  }

  get frmStepTwo() {
    return this.sourceFormatComponent.frmStepTwo;
  }

  get frmStepThree() {
    return this.targetFormatComponent.frmStepThree;
  }

  getSource(source: string){
    this.source = source;
  }

  convert() {
    const sourceFormat = this.frmStepTwo.value["sourceFormat"];
    const targetFormat = this.frmStepThree.value["targetFormat"];
    let newName = this.frmStepFinal.value["newName"];

    if (newName === "") {
      newName = this.frmStepOne.value["fileName"];
    }

    const path = this.frmStepOne.value["path"] + this.frmStepOne.value["fileName"] + "." + this.frmStepOne.value["format"];
    const targetPath = this.getTargetPath(targetFormat, newName);
    this.target = targetPath;

    const config: ConverterConfig = {
      source: path,
      target: targetPath
    };

    this.converterService.convertFile(config, sourceFormat, targetFormat).subscribe({
      next: () => {
        this.isDone = true;
        this.success = true;
        this.toastrService.success("File converted successfully", "Success");
      },
      error: (err) => {
        this.isDone = false;
        this.success = false;
        this.toastrService.error(err.error.message, "Error");
      }
    });
  }

  private getTargetPath(targetFormat: string, targetName: string): string {
    const paths: Record<string, string> = {
      "stalkcd": "public/res/_StalkCDYamls/",
      "jenkins": "public/res/_JenkinsFiles/",
      "githubactions": "public/res/_GitHubActionsFiles/",
      "bpmn": "public/res/_BPMNFiles/"
    };
    
    return `${paths[targetFormat] || "public/res/unknown/"}` + targetName + "." + (targetFormat === "jenkins" ? "Jenkinsfile" : "yml");
  }
}
