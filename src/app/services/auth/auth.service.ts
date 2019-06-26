import { Injectable } from '@angular/core';
import { URL_Dev, URL_Test } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = '';

  constructor(private http: HttpClient, public router: Router) { } 
  cargarStorage() {
    localStorage.getItem('token');
    this.token = localStorage.getItem('token');
    if(this.token === null) {
      this.token = '';
    }
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

  loginGoogle(token) {
    let url = URL_Test + 'auth/google';
    return this.http.post(url, { token });
  }

  login(user: User, rememberme = false) {
    if(rememberme) {
      localStorage.setItem('email', user.email)
    } else {
      localStorage.removeItem('email');
    }

    let url = URL_Test + 'auth/login';
    return this.http.post(url, user)
      .subscribe((res:any) => {
          if(res.token) {
            console.log(res);
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.data));
            this.router.navigate(['/dashboard'])
          }
      });
  }

  newUser(user: User) {
    console.log(user);
    let url = URL_Test + 'auth/newuser';
    return this.http.post(url, user);
  }


  isLogged(){
    this.cargarStorage();
   return(this.token.length > 5)? true : false;
  }
}
