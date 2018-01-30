import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.scss']
})
export class GraficoDonaComponent implements OnInit {
  @Input() public doughnutChartData: number[] = [];
  @Input() public doughnutChartLabels: string[] = [];
  @Input() public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
