import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { AccountInfoService } from '../../services/services.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { type } from 'os';

@Component({
  selector: 'app-invest-info',
  templateUrl: './invest-info.component.html',
  styleUrls: ['./invest-info.component.scss','../../app.component.scss']
})
export class InvestInfoComponent implements OnInit {

  withdrawalsForm: FormGroup;
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
      backgroundColor: 'rgba(52, 226, 156, 1)',
      borderColor: 'rgba(52, 226, 156, 1)'
    },
    {
      borderWidth: 2,
      backgroundColor: 'rgba(165, 162, 251, 1)',
      borderColor: 'rgba(165, 162, 251, 1)'
    }
  ] 
  public ChartData: ChartDataSets[] = [
    { data: [], label: 'Dinero Disponible' },
    { data: [], label: 'En Fondeo' }
  ];
  moneyInfo;
  info;
  invalidAmount = true;
  
  constructor(public infoSvc: AccountInfoService) { 
    this.withdrawalsForm = new FormGroup({
       avaliable:  new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
       amount: new FormControl('', [Validators.required]),
       bankAccount: new FormControl('', [Validators.required, Validators.minLength(16)])
    });
  }

  ngOnInit() {
    var ctx = document.getElementsByTagName('canvas')[0].getContext("2d");
    this.GradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    this.GradientFill.addColorStop(0, "rgba( 52, 226, 156, 0.9)");
    this.GradientFill.addColorStop(1, "rgba( 52, 226, 156, 0)");
    this.ChartColor[0].backgroundColor = this.GradientFill;
    // Color 2
    this.GradientFill = ctx.createLinearGradient(0, 0, 0, 300);
    this.GradientFill.addColorStop(0, "rgba( 165, 162, 251, 0.9)");
    this.GradientFill.addColorStop(1, "rgba( 255, 255, 255, 0)");
    this.ChartColor[1].backgroundColor = this.GradientFill;
    this.calcular();
    this.moneyInfo = this.infoSvc.getMoneyAccount()
    console.log(this.moneyInfo);
    this.info = this.infoSvc.getInfoAccount()
    console.log(this.info);
    this.withdrawalsForm.get('avaliable').setValue(this.moneyInfo[0].dineroDisponible);
  }


  calcular() {
    const data = [
      1000,400,1050,980,1120,70
    ];
    const data2 = [
      1100,700,1050,900,1100,750
    ];
    this.ChartData[0].data = data;
    this.ChartData[1].data = data2;
  }

  validAmount(event) {
    let importe = Number(event.target.value);
    let disponible = this.withdrawalsForm.get('avaliable').value;
    if(importe > disponible) {
      Swal.fire({
        type: 'warning', 
        title: 'El importe no debe ser mayor al dinero disponible',
        showConfirmButton: false,
        timer: 2500
      });
      this.invalidAmount = true
      return;
    }
    this.invalidAmount = false;
  }

  withdrawMoney() {
    Swal.fire({
      type: 'success', 
      title: 'La Operación se realizo Exitosamente',
      showConfirmButton: false,
      timer: 2200
    });
    //console.log(this.withdrawalsForm.value);
    this.infoSvc.moveMoneyfromAccount(this.withdrawalsForm.value)
  }

}
