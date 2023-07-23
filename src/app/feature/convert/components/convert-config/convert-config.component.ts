import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-convert-config',
  templateUrl: './convert-config.component.html',
  styleUrls: ['./convert-config.component.css']
})
export class ConvertConfigComponent{
  @ViewChild('fileDropRef', {static: false}) fileDropEl!: ElementRef;
  files: any[] = [];

  frmStepOne: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmStepOne = this.fb.group({
      fileName: ['', Validators.required],
    });
  }

  //Wenn Datei per Drag and Droprein geworfen wird
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  //Wenn Datei per Button ausgewählt wird
  fileBrowseHandler($event: any) {
    let files = $event.target.files!;
    this.prepareFilesList(files);
  }

  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log('Upload in progress.');
      return;
    }
    this.files.splice(index, 1);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    console.log(this.files);
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
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
