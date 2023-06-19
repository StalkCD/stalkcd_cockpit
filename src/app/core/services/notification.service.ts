import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public toastr: ToastrService) { }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  // TODO: Toastr funktioniert noch nicht
  showError(message: string, title: string) {
    this.toastr.error(message, title);
  }
}
