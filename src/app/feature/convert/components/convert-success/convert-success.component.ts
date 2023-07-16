import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConverterPath } from 'src/app/shared/models/converterPath';
import { ConverterService } from 'src/app/shared/services/converter.service';

@Component({
  selector: 'app-convert-success',
  templateUrl: './convert-success.component.html',
  styleUrls: ['./convert-success.component.css']
})
export class ConvertSuccessComponent {
  @Input() path: string;

  constructor(private converterService: ConverterService, private toastrService: ToastrService) { 
    this.path= '';
  }
  
  download():void{
    var config: ConverterPath = {
      path: this.path
    };

    this.converterService.downloadFile(config).subscribe({
      next: () => {
        this.toastrService.success("Success");
      },
      error: (err) => {
        this.toastrService.error(err.error.message, "Error");
      }
    });
  }
}
