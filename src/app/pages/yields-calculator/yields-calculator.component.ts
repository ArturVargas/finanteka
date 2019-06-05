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
  public ChartType: ChartType = 'bar';
  public ChartLegend = true;
  public ChartColor: Color[] = [
    {
      backgroundColor: 'rgba(0, 255, 0, 0.3)',
      borderColor: 'green'
    }
  ] 
  public ChartData: ChartDataSets[] = [
    { data: [], label: 'Rendimiento Total' }
  ];

  constructor() { }

  ngOnInit() {
  }

  chartHovered({event, active }: {event: MouseEvent, active:{}[]}) {
    console.log(event, active);
  }

  calcular() {
    const data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      80,
      Math.round(Math.random() * 100),
      57,
      55,
      40
    ];
    this.ChartData[0].data = data;
  }

}
