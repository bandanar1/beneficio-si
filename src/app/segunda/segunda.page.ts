import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosPage } from '../filtros/filtros.page';


@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {

  slideOpts = {
    slidesPerView: 3
    
  }

  slideOption = {
    slidesPerView: 4


  }
  slideOption2 = {
    slidesPerView: 2
  }

  destacados = [
    {
      img: '../../assets/imgs/hamburguesa.png'
    },
    {
      img: '../../assets/imgs/fiesta.jpg'
    },
    {
      img: '../../assets/imgs/espectaculos1.png'
    },
    {
      img: '../../assets/imgs/lasagna.png'
    },
    {
      img: '../../assets/imgs/ink.png'
    }
  ]

  categorias = [
    {
      name: 'Namida',
      address: 'Palermo',
      offert: {
        porcent: 20,                
      },
      img: '../../assets/imgs/gastronomia2.png',
      link: '/gastronomia'
    },
    {
      name: 'Namida',
      address: 'Palermo',
      offert: {        
        static: {
          name: 'Artisan Doble',
          value: 565,
          symbol: '$'
        }
      },
      img: '../../assets/imgs/supermercado2.png',
      link: '/supermercados'
    },
    {
      name: 'Namida',
      address: 'Palermo',
      offert: {
        porcent: 80,        
      },
      img: '../../assets/imgs/espectaculos2.png',
      link: '/espectaculos'
    },
    {
      name: 'Namida',
      address: 'Palermo',
      offert: {        
        static: {
          name: 'Artisan Doble',
          value: 565,
          symbol: '$'
        }
      },
      img: '../../assets/imgs/boliches2.png',
      link: '/boliche'
    },
    {
      name: 'Namida',
      address: 'Palermo',
      offert: {
        porcent: 40,        
      },
      img: '../../assets/imgs/farmacia2.png',
      link: '/farmacia'
    }
  ]

  promociones = [
    {
      id: 1,
      nombre: 'lasaña',
      precio: 100,
      descuento: 10,
      img: '../../assets/imgs/lasagna.png',
      descripcion: 'descripciòn AE',
      cantidad: 1,
    },
    {
      id: 2,
      nombre: 'hamburguesa',
      precio: 100,
      descuento: 10,
      img: '../../assets/imgs/hamburguesa.png',
      descripcion: 'descripciòn A',
      cantidad: 1,
    },
    {
      id: 3,
      nombre: 'ravioles',
      precio: 100,
      descuento: 10,
      img: '../../assets/imgs/ravioles.png',
      descripcion: 'descripciòn AB',
      cantidad: 1,
    },
    {
      id: 4,
      nombre: 'carbonara',
      precio: 100,
      descuento: 10,
      img: '../../assets/imgs/carbonara.png',
      descripcion: 'descripciòn AC',
      cantidad: 1,
    },
    {
      id: 5,
      nombre: 'pizza',
      precio: 100,
      descuento: 10,
      img: '../../assets/imgs/pizza.png',
      descripcion: 'descripciòn AD ',
      cantidad: 1,
    }
  ]


  constructor(private modalController: ModalController, private elements: ElementRef) { }


  ngOnInit() {

  }

  ionViewDidEnter() {
    console.log(this.elements.nativeElement.querySelectorAll('select-filter'))
    let filtros = document.getElementsByClassName('select-filter');
    console.log(this.promociones);

    for (let index = 0; index < filtros.length; index++) {
      const element = filtros[index];
      element.addEventListener('click', (e) => {
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
}




