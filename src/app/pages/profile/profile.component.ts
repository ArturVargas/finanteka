import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvestFormComponent } from '../invest-form/invest-form.component';
import { UpdateInfoService } from 'src/app/services/services.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Account } from 'src/app/models/account.model';
const eva = require('eva-icons');

export interface Bank {
  name: string;
  val: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss','../../app.component.scss']
})
export class ProfileComponent implements OnInit {

  usuario = JSON.parse(localStorage.getItem('user'));
  photo = this.usuario.photo;
  personForm: FormGroup;
  contactForm: FormGroup;
  bankForm: FormGroup;
  // 'https://scontent.fmex1-1.fna.fbcdn.net/v/t1.0-9/23843345_10204282949109859_332682262452023732_n.jpg?_nc_cat=108&_nc_ht=scontent.fmex1-1.fna&oh=8f727b4c56ef647786b02ea1afd1a349&oe=5D93E8B9';
  banks: Bank[] = [
    {name: 'BBVA', val: 'BBVA'},
    {name: 'Banco Azteca', val: 'Banco Azteca'},
    {name: 'Banorte', val: 'Banorte'}
  ];
  // beneficiarioFormControl = new FormControl('', [Validators.required]);
  // cuentaFormControl = new FormControl('', [Validators.required]);
  // claveFormControl = new FormControl('', [Validators.required]);
  // bankControl = new FormControl('', [Validators.required]);

  constructor(public modal: MatDialog, public updateSvc: UpdateInfoService) {
    console.log(this.usuario);
   }

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

    this.personForm = new FormGroup({
      name: new FormControl(this.usuario.name, [Validators.required, Validators.minLength(4)]),
      rfc: new FormControl('FIVA831123C80', [Validators.required, Validators.maxLength(13)]),
      address: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.contactForm = new FormGroup({
      phone: new FormControl('5524361232', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern('[0-9]{10}')]),
      email: new FormControl(this.usuario.email, [Validators.required, Validators.email])
    });

    this.bankForm = new FormGroup({
      beneficiary: new FormControl('', [Validators.required]),
      bank: new FormControl('', [Validators.required]),
      account: new FormControl('', [Validators.required]),
      clabe: new FormControl('', [Validators.required])
    })
  }

  updateImg() {
    document.getElementById('imgen').click();
  }

  selectImg(file: File) {
    if(!file) { 
      this.photo = null;
      return;
    }
    // this.photo = file;
    console.log(file);
  }

  // changeImg() {
  //   this.updateSvc.updateImg(this.photo, '0123');
  // }

  updatePersonInfo() {
    console.log('Datos Personales Actualizados');
    // console.log(this.personForm);
    // console.log(this.personForm.value);
    let personInfo = new Account(
      this.personForm.value.name,
      this.contactForm.value.email,
      '12345',
      this.contactForm.value.phone,
      this.personForm.value.rfc,
      null,
      null,
      null,
      null,
      null,
      " ",
      this.usuario._id
    )
    this.updateSvc.updateUser(personInfo)
  }

  updateContactInfo() {
    console.log('Datos de Contacto Actualizados');
    console.log(this.contactForm);
    console.log(this.contactForm.value);
  }

  updateBankData() {
    console.log('Datos Bancarios Actualizados');
    console.log(this.bankForm);
    console.log(this.bankForm.value);
  }

  openMod() {
    const modalRef = this.modal.open(InvestFormComponent)
  }
}
