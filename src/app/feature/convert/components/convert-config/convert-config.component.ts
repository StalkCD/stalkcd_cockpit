import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConverterService } from 'src/app/shared/services/converter.service';

@Component({
  selector: 'app-convert-config',
  templateUrl: './convert-config.component.html',
  styleUrls: ['./convert-config.component.css']
})
export class ConvertConfigComponent{
  @ViewChild('fileDropRef', {static: false}) fileDropEl!: ElementRef;
  files: any[];
  frmStepOne: FormGroup;
  isDone: boolean = false;

  uploadProgress!: number;
  uploadSub!: Subscription;

  constructor(private fb: FormBuilder, private converterService: ConverterService) {
    this.files = [];
    this.frmStepOne = this.fb.group({
      fileName: ['', Validators.required],
      path: ['', Validators.required],
      format: ['', Validators.required]
    });
  }

  onFileDropped($event: any) {
    this.uploadFile($event);
  }

  fileBrowseHandler($event: any) {
    let files = $event.target.files!;
    this.uploadFile(files);
  }

  uploadFile(files: Array<any>){
    const file:File = files[0];
    this.files.push(file);

    if(file){
      const formData:FormData = new FormData();

      formData.append('fileName', file.name);
      formData.append('file', file);

      const upload$ = this.converterService.uploadFile(formData);

      this.uploadSub = upload$.subscribe(
        (event:HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              this.uploadProgress = Math.round(100 * event.loaded  / event.total!);
              break;
            case HttpEventType.Response:
              setTimeout(() => {
                this.uploadProgress = 0;
                this.isDone = true;
              }, 1500);
              this.frmStepOne.patchValue({
                path: event.body.path,
                fileName: event.body.name,
                format: event.body.format
              });
          }
        }
      );
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.uploadProgress = 0;
    this.files.splice(0, 1);
    this.isDone = false;
  }

  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
}
