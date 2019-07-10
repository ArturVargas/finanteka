import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from 'src/app/models/account.model';
import { URL_Test } from 'src/app/config/config';
import { UploadPhotoService } from './upload-photo.service';

@Injectable({
  providedIn: 'root'
})

export class UpdateInfoService {
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };
  constructor(public http: HttpClient, public imgSvc: UploadPhotoService) { }

  getUserInfo() {
    // Toda la info del usuario para retornarla en el perfil.
  }

  updateUserInfo(user) {
    const url = URL_Test + `user/update/${user._id}`;
    console.log(url);
    console.log(user);
    //return this.http.put(url, user, this.httpOptions)
      // .map( (res: any) => {
        
      // })
  };

  updateBankInfo( bankInfo: Account) {
    const url = URL_Test + `bank/info/update/${bankInfo._id}`;
    console.log(bankInfo);
    //return this.http.put(url, bankInfo, this.httpOptions)
      // .map( (res: any) => {
        
      // })
  };

  updateContactInfo( contactInfo ) {
    const url = URL_Test + `user/contact/update/${contactInfo._id}`;
    console.log(contactInfo);
    //return this.http.put(url, contactInfo, this.httpOptions)
      // .map( (res: any) => {
        
      // })
  }

  updateImg(file: File, id: string) {
    this.imgSvc.uploadPhoto( file, id)
      .then( res => {
        console.log(res);
      })
      .catch( err => {
        console.error(err);
      })
  }
}
