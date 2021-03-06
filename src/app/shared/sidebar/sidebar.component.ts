import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { AddFundsComponent } from '../add-funds/add-funds.component';
import { AuthService } from '../../services/services.index';
const eva = require('eva-icons');

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  usuario = JSON.parse(localStorage.getItem('user'));

  constructor(private _bottomSheet: MatBottomSheet, public auth: AuthService) { }

  addMoney(){
    this._bottomSheet.open(AddFundsComponent);
  }
  ngOnInit() {
    eva.replace();
  }

  logout() {
    this.auth.logout();
  }

  showPane (val) {
    var pane = val + 'Action';
    var panel = document.getElementById(pane);
    var stl = panel.className;
    console.log(stl);
    stl == 'pane open' ? 
      panel.setAttribute('class', 'pane') : 
      panel.setAttribute('class', 'pane open');
  }

}

