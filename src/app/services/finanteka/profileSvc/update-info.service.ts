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

  updateUser( user: Account) {
    let url = URL_Test + `user/update/${user._id}`;
    console.log(url);
    console.log(user);
    //return this.http.put(url, user, this.httpOptions)
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
