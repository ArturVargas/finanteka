import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/services.index';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private auth: AuthService, public router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }
 
  sendForm() {
    if(this.loginForm.invalid) {return;}
    let user = new User(
      this.loginForm.value.nombre,
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    this.auth.login(user)
      .subscribe(res => {
        console.log(res);
        if(res.status === "done") {
          this.router.navigate(['dashboard'])
        }
      })
    this.loginForm.reset();
  }

}
