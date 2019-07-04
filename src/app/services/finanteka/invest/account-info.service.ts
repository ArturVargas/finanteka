import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  acccount = [
    {
      valorCuenta: 3000,
      dineroDisponible: 1300,
      enFondeo: 750,
      pendientePago: 850
    }
  ];
  info = [
    {
      rendimientos: 0.1965,
      interesRecib: 4500,
      comisiones: 200
    }
  ]
  constructor(private http: HttpClient) { }

  getMoneyAccount() {
    return  this.acccount
  };

  getInfoAccount() {
    return this.info
  };

  moveMoneyfromAccount(data) {
    console.log(data);
    // Cuando el usuario saque fondos de su cuenta.
  }
}
