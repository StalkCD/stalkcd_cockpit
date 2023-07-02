import { Component, OnInit } from '@angular/core';
import { KpisConfig } from 'src/app/shared/models/kpisConfig';
import { BusyService } from 'src/app/shared/services/busy.service';
import { KpiService } from 'src/app/shared/services/kpi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  config: KpisConfig = {
    repoName: 'hibernate-orm',
    workflowName: 'CodeQL',
    loadFrom: 'local'
  };

  constructor(private busyServie: BusyService, private kpiService: KpiService) {
  }
  ngOnInit() {
    // this.busyServie.busy();
    // setTimeout(() => {
    //   this.busyServie.idle();
    // }, 5000);
     this.getKpis(this.config);

  }
  getKpis(config: KpisConfig){
    this.kpiService.getKpis(config).subscribe((data) => {
      console.log(data);
    });
  }
}
