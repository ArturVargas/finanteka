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

}

