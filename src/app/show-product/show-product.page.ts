import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google: any;
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.page.html',
  styleUrls: ['./show-product.page.scss'],
})
export class ShowProductPage implements OnInit {

@ViewChild('googlemaps', { static: false }) googlemaps: ElementRef;
  map;
  markers = [];
  zoom: number = 16;
  


  horarios = [
    {
      dia: 'Lunes',
      horario: '7:30am - 4:30pm'
    },
    {
      dia: 'Martes',
      horario: '7:30am - 4:30pm'
    },
    {
      dia: 'Miercoles',
      horario: '7:30am - 4:30pm'
    },
    {
      dia: 'Jueves',
      horario: '7:30am - 4:30pm'
    },
    {
      dia: 'Viernes',
      horario: '7:30am - 4:30pm'
    },
    {
      dia: 'Sabado',
      horario: 'Cerrado'
    },
    {
      dia: 'Domingo',
      horario: 'Cerrado'
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

}
