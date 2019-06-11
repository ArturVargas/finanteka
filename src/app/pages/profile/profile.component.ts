import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvestFormComponent } from '../invest-form/invest-form.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss','../../app.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public modal: MatDialog) { }

  ngOnInit() {
  }
  openMod() {
    const modalRef = this.modal.open(InvestFormComponent)
  }
}
