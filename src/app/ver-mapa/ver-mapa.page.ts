import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosPage } from '../filtros/filtros.page';

declare var google: any;
@Component({
  selector: 'app-ver-mapa',
  templateUrl: './ver-mapa.page.html',
  styleUrls: ['./ver-mapa.page.scss'],
})
export class VerMapaPage implements OnInit {

@ViewChild('googlemaps', { static: false }) googlemaps: ElementRef;
slideOption = {
  slidesPerView: 4


}
slideOption2 = {
slidesPerView: 2



}



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
  modalController: any;

  constructor(private modalCtrl: ModalController, private elements: ElementRef) { }

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
    console.log(this.elements.nativeElement.querySelectorAll('select-filter'))
    let filtros = document.getElementsByClassName('select-filter');
    
    for (let index = 0; index < filtros.length; index++) {
      const element = filtros[index];
      element.addEventListener('click', (e)=>{
        element.classList.toggle('active');
      })
    }

    
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