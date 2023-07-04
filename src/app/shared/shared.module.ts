import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DownloadModalComponent } from './modals/download-modal/download-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [  
    NgxSpinnerModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
