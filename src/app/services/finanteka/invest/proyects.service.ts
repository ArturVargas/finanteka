import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  fiantekaProyects = [
    {
      title: 'Las Exitosas',
      monto: '93,000',
      plazo: '16 semanas',
      tasaRetorno: 0.0689,
      integrantes: 7,
      ciclo: 1,
      img: 'https://media.npr.org/assets/img/2017/05/03/alyan_hala_credit-beowulf-sheehan_sq-7327cd520f8358f81c2e88c4cdf4485041ad6cc4-s800-c85.jpg'
    },
    {
      title: 'Las Aventureras',
      monto: '43,000',
      plazo: '16 semanas',
      tasaRetorno: 0.0689,
      integrantes: 4,
      ciclo: 1,
      img: 'https://girls20.org/wp-content/uploads/2018/06/2.png'
    },
    {
      title: 'Edna',
      monto: '55,000',
      plazo: '24 semanas',
      tasaRetorno: 0.0455,
      integrantes: 1,
      ciclo: 2,
      img: 'https://media.npr.org/assets/img/2017/05/03/alyan_hala_credit-beowulf-sheehan_sq-7327cd520f8358f81c2e88c4cdf4485041ad6cc4-s800-c85.jpg'
    },
    {
      title: 'Las Exitosas',
      monto: '93,000',
      plazo: '16 semanas',
      tasaRetorno: 0.0689,
      integrantes: 7,
      ciclo: 1,
      img: 'https://girls20.org/wp-content/uploads/2018/06/2.png'
    },
    {
      title: 'Las Aventureras',
      monto: '43,000',
      plazo: '16 semanas',
      tasaRetorno: 0.0689,
      integrantes: 4,
      ciclo: 1,
      img: 'https://girls20.org/wp-content/uploads/2018/06/2.png'
    },
    {
      title: 'Edna',
      monto: '55,000',
      plazo: '24 semanas',
      tasaRetorno: 0.0455,
      integrantes: 1,
      ciclo: 2,
      img: 'https://girls20.org/wp-content/uploads/2018/06/2.png'
    },
    {
      title: 'Las Exitosas',
      monto: '93,000',
      plazo: '16 semanas',
      tasaRetorno: 0.0689,
      integrantes: 7,
      ciclo: 1,
      img: 'https://girls20.org/wp-content/uploads/2018/06/2.png'
    },
    {
      title: 'Las Aventureras',
      monto: '43,000',
      plazo: '16 semanas',
      tasaRetorno: 0.0689,
      integrantes: 4,
      ciclo: 1,
      img: 'https://media.npr.org/assets/img/2017/05/03/alyan_hala_credit-beowulf-sheehan_sq-7327cd520f8358f81c2e88c4cdf4485041ad6cc4-s800-c85.jpg'
    },
    {
      title: 'Edna',
      monto: '55,000',
      plazo: '24 semanas',
      tasaRetorno: 0.0455,
      integrantes: 1,
      ciclo: 2,
      img: 'https://girls20.org/wp-content/uploads/2018/06/2.png'
    }
  ]

  constructor() { }

  getFinantekaProyects() {
    return this.fiantekaProyects;
  }
}
