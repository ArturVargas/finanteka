import { Injectable } from '@angular/core';
import { URL_Test } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotoService {

  constructor() { }

  uploadPhoto(file: File, id: string) {
    return new Promise( (resolve, reject) => {

      let formData = new FormData();
      let xhr = new XMLHttpRequest();
  
      formData.append('img', file, file.name);
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
          if(xhr.status === 200) {
            console.log('Imagen Subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('No se pudo subir');
            reject( xhr.response);
          }
        }
      };

      let url = URL_Test + `/upload/img/${id}`;
      xhr.open('PUT', url, true);
      xhr.send(formData);
    })

  }
}
