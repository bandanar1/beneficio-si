import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reserva-restaurant',
  templateUrl: './reserva-restaurant.page.html',
  styleUrls: ['./reserva-restaurant.page.scss'],
})
export class ReservaRestaurantPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  reservar(){
    this.navCtrl.navigateForward('data-reserva');
  }  

}
