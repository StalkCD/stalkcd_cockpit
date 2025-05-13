import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // ✅ Import MatCardModule
import { MatButtonModule } from '@angular/material/button'; // ✅ Import MatButtonModule
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule for routerLink
import { ToastrService } from 'ngx-toastr';
import { ConverterPath } from 'src/app/shared/models/converterPath';
import { ConverterService } from 'src/app/shared/services/converter.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-convert-success',
  standalone: true, // ✅ Standalone component
  templateUrl: './convert-success.component.html',
  styleUrls: ['./convert-success.component.css'],
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule], // ✅ Include necessary modules
})
export class ConvertSuccessComponent {
  @Input() path: string;
  @Input() status: boolean;

  constructor(private converterService: ConverterService, private toastrService: ToastrService) { 
    this.path = '';
    this.status = false;
  }
  
  getFile(): void {
    var config: ConverterPath = {
      path: this.path
    };

    var fileName = this.getFileName(this.path);

    this.converterService.postFile(config).subscribe({
      next: (data) => {
        let downloadURL = window.URL.createObjectURL(data);
        saveAs(downloadURL, fileName);
      },
      error: (err) => {
        this.toastrService.error(err.error.message, "Error");
      }
    });
  }

  private getFileName(path: string): string {
    return path.split('/')[3];
  }
}
