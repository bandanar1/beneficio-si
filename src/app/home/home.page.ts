import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  
  macdonalds = {
    nombre: 'macdonalds',
    menu: 'Hambuerguesas, papas fritas y refresco',
    delivery: 'si',
    preciodelcombo: 3000
  }
  PolloArturos = {
    nombre: 'Pollo Arturos',
    menu: 'Pollos, papas fritas y refresco',
    delivery: 'no',
    preciodelcombo: 5000
  }
  mirano = {
    menu: 'Perro Caliente',
    nombre: 'mirano',
    delivery: 'si',
    preciodelcombo: 10000
  }

  Listaderestaurant = [
  this.macdonalds, this.PolloArturos, this.mirano

  ]

  constructor(private navCtrl: NavController) {    
  }
  
  ngOnInit(){
    
  }


 
}
