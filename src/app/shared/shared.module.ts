import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DownloadModalComponent } from './modals/download-modal/download-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DownloadModalComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule.forRoot(
      {
        type: 'square-loader',
      }
    ),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [  
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
