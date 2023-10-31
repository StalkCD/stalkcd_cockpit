import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DownloadModalComponent } from './modals/download-modal/download-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ToSecondsPipe } from './pipes/to-seconds.pipe';
import { ToMinutesPipe } from './pipes/to-minutes.pipe';
import { CountElementsPipe } from './pipes/count-elements.pipe';
import { InformationModalComponent } from './modals/information-modal/information-modal.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UploadModalComponent } from './modals/upload-modal/upload-modal.component';
import {MatSelectModule} from '@angular/material/select';
import { StatusNamePipe } from './pipes/status-name.pipe';


@NgModule({
  declarations: [
    DownloadModalComponent,
    ToSecondsPipe,
    ToMinutesPipe,
    CountElementsPipe,
    InformationModalComponent,
    DragAndDropDirective,
    ProgressBarComponent,
    UploadModalComponent,
    StatusNamePipe
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule.forRoot(
      {
        type: 'square-loader',
      }
    ),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { 
        displayDefaultIndicatorType: false,
        showError: true 
      }
    }
  ],
  exports: [  
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    ToSecondsPipe,
    ToMinutesPipe,
    CountElementsPipe,
    DragAndDropDirective,
    ProgressBarComponent,
    MatSelectModule,
    StatusNamePipe
  ]
})
export class SharedModule { }
