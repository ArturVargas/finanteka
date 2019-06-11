import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvestFormComponent } from '../invest-form/invest-form.component';
const eva = require('eva-icons');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss','../../app.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public modal: MatDialog) { }

  ngOnInit() {
    var profile = document.getElementById('profile');
    var edit = document.getElementById('edit');
    var activeEP = false;
    edit.addEventListener('click', function (e) {
      var attr = activeEP ? 'target compact' : 'target compact activeE';
      profile.setAttribute('class', attr);
      activeEP = activeEP ? false : true;
    });
    eva.replace();
  }
  openMod() {
    const modalRef = this.modal.open(InvestFormComponent)
  }
}
