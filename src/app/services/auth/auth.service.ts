import { Injectable } from '@angular/core';
import { URL_Dev } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
    console.log('Servicio Auth listo')
  }

  logout() {

  }

  login(user: User) {
    console.log(user);
    let url = URL_Dev + '/auth/login';
    return this.http.post(url, user)
  }

  newUser(user: User) {
    console.log(user);
    let url = URL_Dev + '/auth/newuser';
    return this.http.post(url, user)
  }
}
