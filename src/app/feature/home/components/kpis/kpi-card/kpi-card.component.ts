import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.css']
})
export class KpiCardComponent implements OnInit{
  @Input() title!: string;
  @Input() duration!: number;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
