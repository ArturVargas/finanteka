import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/services.index';
import { User } from '../models/user.model';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth2: any;
  loginForm: FormGroup;
  email: string;

  constructor(private auth: AuthService) {
    this.loginForm = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl('', [Validators.required]),
       rememberme: new FormControl(false)
    })
   }

  ngOnInit() {
    //this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if(this.email.length > 1) {
      this.loginForm.get('rememberme').setValue(true);
      this.loginForm.get('email').setValue(this.email);
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', //el mismo id del index.html
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSigni(document.getElementById('btnGoogle'));
    })
  }

  attachSigni(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
        //let profile = googleUser.getBasicProfile();
        let token = googleUser.getAuthResponse().id_token;
        console.log(token);
        this.auth.loginGoogle(token)
          .subscribe(res => {
            console.log(res);
          })
    });
  }
 
  sendForm() {
    if(this.loginForm.invalid) {return;}
    let user = new User(
      null,
      this.loginForm.value.email,
      this.loginForm.value.password,
      true
    );
    this.auth.login(user, this.loginForm.value.rememberme)
  }

}
