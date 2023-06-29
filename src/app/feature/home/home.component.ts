import { Component, OnInit } from '@angular/core';
import { BusyService } from 'src/app/shared/services/busy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private busyServie: BusyService) {
  }
  ngOnInit() {
    this.busyServie.busy();
    setTimeout(() => {
      this.busyServie.idle();
    }, 5000);
  }
  
}
