import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../services/services.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
const eva = require('eva-icons');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  validation = '';

  constructor( public authSvc: AuthService, public router: Router) { }

  ngOnInit() {
    eva.replace();
    this.registerForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      repassword: new FormControl('', Validators.required),
      terms: new FormControl(false)
    })
  }

  sendForm() {    
    var login = document.getElementById('formSpace');
    if(this.registerForm.invalid) {return;}
    if(!this.registerForm.value.terms){ 
      Swal.fire({
        position: 'bottom-end',
        type: 'warning',
        title: 'Debes Aceptar los Terminos y Condiciones',
        showConfirmButton: false,
        timer: 2500
      }) 
      return;
    }
    login.className = 'blur';
    let user = new User(
      this.registerForm.value.nombre,
      this.registerForm.value.email,
      this.registerForm.value.password
    );
    this.authSvc.newUser(user);
  }

}
