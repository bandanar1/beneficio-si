import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular/';

@Component({
  selector: 'app-show-mision',
  templateUrl: './show-mision.page.html',
  styleUrls: ['./show-mision.page.scss'],
})
export class ShowMisionPage implements OnInit {

  Mision = null

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
    ) { }

  ngOnInit() {
     this.Mision = this.navParams.get('mision');
     console.log(this.Mision);
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
