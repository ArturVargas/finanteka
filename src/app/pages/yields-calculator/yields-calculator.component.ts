import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-yields-calculator',
  templateUrl: './yields-calculator.component.html',
  styleUrls: ['./yields-calculator.component.scss']
})
export class YieldsCalculatorComponent implements OnInit {

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
      backgroundColor: 'rgba(165, 162, 251, 0.3)',
      borderColor: 'rgba(165, 162, 251, 1)'
    }
  ] 
  public ChartData: ChartDataSets[] = [
    { data: [], label: 'Rendimiento Total' }
  ];

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementsByTagName('canvas')[0].getContext("2d");
    this.GradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    this.GradientFill.addColorStop(0, "rgba( 165, 162, 251, 0.6)");
    this.GradientFill.addColorStop(1, "rgba( 255, 255, 255, 0)");
    this.ChartColor[0].backgroundColor = this.GradientFill;
    this.calcular([0,0,0,0,0,0]);
  }

  chartHovered({event, active }: {event: MouseEvent, active:{}[]}) {
    console.log(event, active);
  }

  calcular(m) {
    const data = [
      Math.round(Math.random() * m[0]),
      Math.round(Math.random() * m[1]),
      m[2],
      Math.round(Math.random() * m[3]),
      m[4],
      m[5],
      m[6]
    ];
    this.ChartData[0].data = data;
  }

}
