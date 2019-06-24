import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/models/account.model';
import { URL_Test } from 'src/app/config/config';
import { UploadPhotoService } from './upload-photo.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateInfoService {
  token = localStorage.getItem('token');

  constructor(public http: HttpClient, public imgSvc: UploadPhotoService) { }

  updateUser( user: Account) {
    let url = URL_Test + `user/${user._id}`;
    console.log(url);
    return this.http.put(url, user)
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
