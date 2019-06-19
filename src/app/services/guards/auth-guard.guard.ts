import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(public authSvc: AuthService, public router: Router) {}

  canActivate(){
    if(this.authSvc.isLogged()){
      return true;
    } else {
      console.log('Blocked')
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
