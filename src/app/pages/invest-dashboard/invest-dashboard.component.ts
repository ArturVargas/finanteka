import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest-dashboard',
  templateUrl: './invest-dashboard.component.html',
  styleUrls: ['./invest-dashboard.component.scss']
})
export class InvestDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addMoney(){
    console.log('manda a traer un archivo de html')
  }

}
