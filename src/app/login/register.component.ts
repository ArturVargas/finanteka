import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  validation = '';

  constructor() { 
    this.registerForm = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'repassword': new FormControl('', [Validators.required]),
      'terms': new FormControl()
    })
  }

  sendForm() {
    if(this.registerForm.invalid) {return;}
    console.log(this.registerForm.value);
    this.registerForm.reset();
    
  }
  ngOnInit() {
  }

}
