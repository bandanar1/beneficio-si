import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosPage } from '../filtros/filtros.page';
import { BrokaMarkers } from '../interface';
import { ValoracionModalPage } from '../valoracion-modal/valoracion-modal.page';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {


  @ViewChild('googlemaps', { static: false }) googlemaps: ElementRef;
  slideOption = {
    slidesPerView: 4


  }
  slideOption2 = {
    slidesPerView: 2
  }

  productos = [
    {
      nombre: 'macDonalds',
      latLng: {
        lat: -34.6131516,
        lng: -58.3772316
      },
      img: '../../assets/imgs/macdonald.jpeg'
    },
    {
      nombre: 'Cines Unidos',
      latLng: {
        lat: -34.612929,
        lng: -58.380318
      },
      img: '../../assets/imgs/cinesunidos.jpeg'
    },
    {
      nombre: 'Madeirence',
      latLng: {
        lat: -34.613940,
        lng: -58.381320
      },
      img: '../../assets/imgs/madeirence.jpeg'
    }
  ]


  map;
  markers = [];
  zoom: number = 16;


  modalController: any;

  constructor(private modalCtrl: ModalController, private elements: ElementRef) { }

  ionViewDidEnter() {
    const location = new google.maps.LatLng(-34.6131516, -58.3772316);
    const options = {
      center: location,
      zoom: this.zoom,
      mapTypeId: 'roadmap',
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: true,
    }
    this.map = new google.maps.Map(this.googlemaps.nativeElement, options);
    console.log(this.elements.nativeElement.querySelectorAll('select-filter'))
    let filtros = document.getElementsByClassName('select-filter');

    this.productos.forEach(producto => {
      let marker = new BrokaMarkers(
        new google.maps.LatLng(producto.latLng.lat, producto.latLng.lng),
        producto.img,
        null
        )
      marker.setMap(this.map);
    })

    for (let index = 0; index < filtros.length; index++) {
      const element = filtros[index];
      element.addEventListener('click', (e) => {
        element.classList.toggle('active');
      })
    }


  }

  openValoracion(){
    this.modalCtrl.create({
      component: ValoracionModalPage,
      cssClass: 'map-options-modal',
    }).then(m => m.present());
  }

  addMarkers() {
    
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FiltrosPage
    });
    return await modal.present();
  }


  ngOnInit() {
  }


}


