import { Component, OnInit } from '@angular/core';
import { KpiService } from '../../services/kpi.service';

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.css']
})
export class KpiListComponent implements OnInit {
  kpis: any; 

  constructor(private kpiService: KpiService) {
  }
  
  ngOnInit(): void {
    this.getKpis();
  }

  getKpis() {
    this.kpiService.getKpis('hibernate-orm', 'CodeQL').subscribe(data => {
      this.kpis = data;
    });
  }
}
