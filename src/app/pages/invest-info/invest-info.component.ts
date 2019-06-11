import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-invest-info',
  templateUrl: './invest-info.component.html',
  styleUrls: ['./invest-info.component.scss','../../app.component.scss']
})
export class InvestInfoComponent implements OnInit {

  public ChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public ChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  public ChartType: ChartType = 'line';
  public ChartLegend = true;
  public GradientFill;
  public ChartColor: Color[] = [
    {
      borderWidth: 2,
      backgroundColor: 'rgba(165, 162, 251, 1)',
      borderColor: 'rgba(165, 162, 251, 1)'
    },
    {
      borderWidth: 2,
      backgroundColor: 'rgba(52, 226, 156, 1)',
      borderColor: 'rgba(52, 226, 156, 1)'
    }
  ] 
  public ChartData: ChartDataSets[] = [
    { data: [], label: 'Dinero Disponible' },
    { data: [], label: 'En Fondeo' }
  ];

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementsByTagName('canvas')[0].getContext("2d");
    this.GradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    this.GradientFill.addColorStop(0, "rgba( 165, 162, 251, 0.9)");
    this.GradientFill.addColorStop(1, "rgba( 255, 255, 255, 0)");
    this.ChartColor[0].backgroundColor = this.GradientFill;
    // Color 2
    this.GradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    this.GradientFill.addColorStop(0, "rgba( 52, 226, 156, 0.9)");
    this.GradientFill.addColorStop(1, "rgba( 52, 226, 156, 0)");
    this.ChartColor[1].backgroundColor = this.GradientFill;
    this.calcular();
  }

  chartHovered({event, active }: {event: MouseEvent, active:{}[]}) {
    console.log(event, active);
  }

  calcular() {
    const data = [
      1000,800,1000,1100,1000,1300
    ];
    const data2 = [
      1100,700,1050,900,1100,750
    ];
    this.ChartData[0].data = data;
    this.ChartData[1].data = data2;
  }

}
