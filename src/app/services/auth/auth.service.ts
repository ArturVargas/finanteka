import { Injectable } from '@angular/core';
import { URL_Dev } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { 
    console.log('Servicio Auth listo')
  }

  logout() {

  }

  login(user: User) {
    let url = URL_Dev + '/login';
    return this.http.post(url, user)
  }

  newUser(user: User) {
    let url = URL_Dev + '/newuser';
    return this.http.post(url, user)
  }
}
