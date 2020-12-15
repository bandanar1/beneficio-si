import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShowMisionPage } from '../show-mision/show-mision.page';

declare var google: any;

@Component({
  selector: 'app-misiones',
  templateUrl: './misiones.page.html',
  styleUrls: ['./misiones.page.scss'],
})
export class MisionesPage implements OnInit {


  @ViewChild('googlemaps', { static: false }) googlemaps: ElementRef;
  map;
  markers = [];
  zoom: number = 16;

  selectedView = 'lista';


  misiones = [
    {
      nombre: 'Macdonalds',
      image: '../../assets/imgs/MacdonaldsLogo.png',
      descripcion: 'Nos encontramos a 123km de distancia'
    },
    {
      nombre: 'Macdonalds',
      image: '../../assets/imgs/MacdonaldsLogo.png',
      descripcion: 'Nos encontramos a 123km de distancia'
    },
    {
      nombre: 'Macdonalds',
      image: '../../assets/imgs/MacdonaldsLogo.png',
      descripcion: 'Nos encontramos a 123km de distancia'
    },
    {
      nombre: 'Macdonalds',
      image: '../../assets/imgs/MacdonaldsLogo.png',
      descripcion: 'Nos encontramos a 123km de distancia'
    }
  ]
  constructor(private modalCtrl: ModalController) { }

  ionViewDidEnter() {
    const location = new google.maps.LatLng(-34.6131516, -58.3772316);
    const options = {
      center: location,
      zoom: this.zoom,
      streetViewControl: false,
      mapTypeId: 'roadmap',
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: true,
    }
    this.map = new google.maps.Map(this.googlemaps.nativeElement, options);
  }

  ngOnInit() {

  }

  async moreInfo(item) {
    const modal = await this.modalCtrl.create({
      component: ShowMisionPage,
      componentProps: {
        mision: item
      }
    })
    modal.present(); 
  }




}