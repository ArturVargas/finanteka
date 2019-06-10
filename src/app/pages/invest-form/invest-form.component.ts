import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invest-form',
  templateUrl: './invest-form.component.html',
  styleUrls: ['./invest-form.component.scss']
})
export class InvestFormComponent implements OnInit {

  datosPersonales: FormGroup;
  datosBancarios: FormGroup;
  datosContacto: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<InvestFormComponent>) { }

  ngOnInit() {
    this.datosPersonales = this.formBuilder.group({
      nombre: ['', Validators.required],
      apePat: ['', Validators.required],
      dir: ['', Validators.required],
      rfc: ['', Validators.required]
    });
    this.datosBancarios = this.formBuilder.group({
      beneficiario: ['', Validators.required],
      banco: ['', Validators.required],
      cuenta: ['', Validators.required],
      clabe: ['', Validators.required]
    });
    this.datosContacto = this.formBuilder.group({
      email: ['', Validators.required],
      telefono: ['', Validators.required]
    })
  }

  sendForms() {
    console.log(this.datosPersonales.value);
    console.log(this.datosBancarios.value);
    // this.dialogRef.afterClosed().subscribe( res => {
    //   console.log(res);
      
    // })
    this.dialogRef.close();
  }

}
