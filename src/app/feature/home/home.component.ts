import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DownloadModalComponent } from 'src/app/shared/modals/download-modal/download-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bsModalRef: BsModalRef<DownloadModalComponent> = new BsModalRef<DownloadModalComponent>();

  constructor(private modalService: BsModalService) {}

  openDownloadModal() {
    this.bsModalRef = this.modalService.show(DownloadModalComponent);
  }
}
