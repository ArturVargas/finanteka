import { Component, OnInit } from '@angular/core';
import { ProyectsService } from '../../services/services.index';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss','../../app.component.scss']
})
export class ProyectsComponent implements OnInit {
  proyects;
  addMoney: FormGroup
  constructor(public proyectsSvc: ProyectsService) { 
    this.addMoney = new FormGroup({
      quantity: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
    this.proyects = this.proyectsSvc.getFinantekaProyects()
    console.log(this.proyects);
     
  }

  investRequest(idx){
    console.log(idx);
    console.log(this.proyects[idx]);
    console.log(this.addMoney.value);
  }

}
