import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvestFormComponent } from '../invest-form/invest-form.component';
import { UpdateInfoService } from 'src/app/services/services.index';
const eva = require('eva-icons');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss','../../app.component.scss']
})
export class ProfileComponent implements OnInit {
  photo = 
  'https://scontent.fmex1-1.fna.fbcdn.net/v/t1.0-9/23843345_10204282949109859_332682262452023732_n.jpg?_nc_cat=108&_nc_ht=scontent.fmex1-1.fna&oh=8f727b4c56ef647786b02ea1afd1a349&oe=5D93E8B9';

  constructor(public modal: MatDialog, public updateSvc: UpdateInfoService) { }

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

  updateImg() {
    document.getElementById('imgen').click();
  }

  selectImg(file: File) {
    if(!file) { 
      this.photo = null;
      return;
    }
    this.photo = file;
    console.log(file);
  }

  // changeImg() {
  //   this.updateSvc.updateImg(this.photo, '0123');
  // }

  updatePersonInfo() {
    console.log('Datos Personales Actualizados');
  }

  updateContactInfo() {
    console.log('Datos de Contacto Actualizados');
  }

  updateBankData() {
    console.log('Datos Bancarios Actualizados');
  }

  openMod() {
    const modalRef = this.modal.open(InvestFormComponent)
  }
}
