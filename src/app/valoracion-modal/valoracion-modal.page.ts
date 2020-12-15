import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-valoracion-modal',
  templateUrl: './valoracion-modal.page.html',
  styleUrls: ['./valoracion-modal.page.scss'],
})
export class ValoracionModalPage implements OnInit {

  valoracion = {
    lower: 0,
    upper: 5
  }

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
