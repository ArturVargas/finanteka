import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { AddFundsComponent } from '../add-funds/add-funds.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  addMoney(){
    this._bottomSheet.open(AddFundsComponent);
  }
  ngOnInit() {
  }

}

