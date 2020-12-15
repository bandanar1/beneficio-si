import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosPage } from '../filtros/filtros.page';

declare var google: any;
@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.page.html',
  styleUrls: ['./show-restaurant.page.scss'],
})
export class ShowRestaurantPage implements OnInit {

@ViewChild('googlemaps', { static: false }) googlemaps: ElementRef;
slideOption = {
  slidesPerView: 4


}
slideOption2 = {
slidesPerView: 2



}

filtros = [
  {
    titulo: 'Panaderia y Reposteria',
    filtros: [
      {
        nombre: 'Panes'
      },
      {
        nombre: 'Budines, Magdalenas y Bizcochuelos'
      },{
        nombre: 'Reposteria'
      },{
        nombre: 'Tostadas, Grisines, Marineras'
      },{
        nombre: 'Especialidades Dulces'
      },{
        nombre: 'Tortas'
      },
      {
        nombre: 'Otros Panificados'
      },
    ]           
  },
  {
    titulo: 'Carnes, pollos y pescados',
    filtros:[
      {
        nombre: 'Carne Vacuna'
      },
      {
        nombre: 'Pollo y Granja'
      },{
        nombre: 'Carne de Cerdo'
      },{
        nombre: 'Pescados'
      },{
        nombre: 'Rebozados'
      },
      {
        nombre: 'Achuras y Embutidos'
      },
    ]      
  },{
    titulo: 'Enlatados y Conservas',
    filtros: [
      {
        nombre: 'Conservas de Carne y Pescado'
      },
      {
        nombre: 'Conservas de Legumbres y Verduras'
      },{
        nombre: 'Conservas de Frutas'
      },
      {
        nombre: 'Aceitunas y Encurtidos'
      },
    ]           
  },{
    titulo: 'Sin TACC',
    filtros: [
      {
        nombre: 'Almacen'
      },
      {
        nombre: 'Alfajores y Barritas'
      },
      {
        nombre: 'Galletitas y Snacks'
      },
      {
        nombre: 'Harinas y Pan Rallado'
      },
      {
        nombre: 'Pastas, Arroz y Legumbres'
      },
      {
        nombre: 'Panaderia y Reposteria'
      },
      {
        nombre: 'Lacteos y Productos Frescos '
      },
    ]           
  },{
    titulo: 'Vinos',
    filtros: [
      {
        nombre: 'Vinos Blancos'
      },
      {
        nombre: 'Vinos Tintos'
      },
      {
        nombre: 'Vinos Rosados '
      },
    ]           
  },{
    titulo: 'Congelados',
    filtros: [
      {
        nombre: 'Comidas Congeladas'
      },
      {
        nombre: 'Verduras Congeladas'
      },
      {
        nombre: 'Frutas Congeladas'
      },
      {
        nombre: 'Congelados de Pollo'
      },
      {
        nombre: 'Papas Congeladas'
      },
      {
        nombre: 'Helados y Postres'
      },
      {
        nombre: 'Pizzas y Tartas'
      },
      {
        nombre: 'Hamburguesas y Milanesas'
      },
      {
        nombre: 'Rebozados '
      },
    ]           
  },{
    titulo: 'Limpieza',
    filtros: [
      {
        nombre: 'Accesorios de Limpieza'
      },
      {
        nombre: 'Cuidado para la Ropa'
      },
      {
        nombre: 'Desodorante de Ambiente'
      },
      {
        nombre: 'Insecticida'
      },
      {
        nombre: 'Limpieza de Baño'
      },
      {
        nombre: 'Limpieza de Cocina'
      },
      {
        nombre: 'Limpieza de Pisos y Superficies'
      },
      {
        nombre: 'Lavandina'
      },
      {
        nombre: 'Calzado'
      },

      {
        nombre: 'Papeles'
      },
    ]           
  },{
    titulo: 'Lácteos',
    filtros: [
      {
        nombre: 'Leches'
      },
      {
        nombre: 'Yogures'
      },{
        nombre: 'Postres'
      },{
        nombre: 'Cremas'
      },{
        nombre: 'Dulce de Leche'
      },{
        nombre: 'Manteca y Margarinas'
      },{
        nombre: 'Pastas Frescas'
      },{
        nombre: 'Tapas'
      },
      {
        nombre: 'Comidas Elaboradas'
      },
    ]           
  },{
    titulo: 'Quesos y Fiambres',
    filtros: [
      {
        nombre: 'Quesos'
      },
      {
        nombre: 'Fiambres'
      },
    ]           
  },{
    titulo: 'Frutas y Verduras',
    filtros: [
      {
        nombre: 'Frutas'
      },
      {
        nombre: 'Verduras'
      },
      {
        nombre: 'Huevos'
      },
    ]           
  },{
    titulo: 'Galletas, Golosinas y Snacks',
    filtros: [
      {
        nombre: 'Galletitas y Bizcochitos'
      },
      {
        nombre: 'Crackers y Galletas de Arroz'
      },{
        nombre: 'Cereales y Barras Energeticas'
      },{
        nombre: 'Snacks Salados'
      },{
        nombre: 'Golosinas'
      },{
        nombre: 'Alfajores'
      },
      {
        nombre: 'Chocolates y Coberturas'
      },
    ]           
  },{
    titulo: 'Almacen',
    filtros: [
      {
        nombre: 'Snacks'
      },
      {
        nombre: 'Aceites y Vinagres'
      },

      {
        nombre: 'Condimentos'
      },{
        nombre: 'Encurtidos'
      },{
        nombre: 'Conservas'
      },{
        nombre: 'Salsa de Tomate'
      },{
        nombre: 'Semillas'
      },{
        nombre: 'Cereales'
      },{
        nombre: 'Galletas'
      },{
        nombre: 'Mermeladas y Dulces'
      },{
        nombre: 'Panaderia'
      },{
        nombre: 'Golosinas y Chocolates'
      },{
        nombre: 'Reposteria'
      },{
        nombre: 'Suplementos Dieteticos'
      },{
        nombre: 'Arroz'
      },{
        nombre: 'Legumbres'
      },{
        nombre: 'Edulcorante'
      },{
        nombre: 'Pastas'
      },{
        nombre: 'Harinas'
      },{
        nombre: 'Premezcla'
      },{
        nombre: 'Sopas y Saborizantes'
      },{
        nombre: 'Rebozador y Pan Rallado'
      },{
        nombre: 'Panificado'
      },
      {
        nombre: 'Infusiones'
      },
    ]           
  },{
    titulo: 'Perfumería',
    filtros: [
      {
        nombre: 'Cuidado Personal'
      },
      {
        nombre: 'Cuidado para el Cabello'
      },{
        nombre: 'Desodorantes'
      },
      {
        nombre: 'Antitranspirante'
      },{
        nombre: 'Protector Solar'
      },
      {
        nombre: 'Cuidado Bucal'
      },{
        nombre: 'Cremas de Belleza'
      },
      {
        nombre: 'Cosmeticos'
      },{
        nombre: 'Desmaquillantes'
      },
      {
        nombre: 'Colonias y Perfumes'
      },{
        nombre: 'Accesorios'
      },
      {
        nombre: 'Farmacia'
      },{
        nombre: 'Pañales'
      },
      {
        nombre: 'Productos de Incontinencia'
      },{
        nombre: 'Higiene Personal'
      },
      {
        nombre: 'Protección Femenina'
      },
    ]           
  },{
    titulo: 'Bebes y Maternidad',
    filtros: [
      {
        nombre: 'Pañales'
      },
      {
        nombre: 'Alimentos para Bebe'
      },
      {
        nombre: 'Cuidado del Bebe y de la Mama'
      },
    ]           
  },{
    titulo: 'Bebidas Con Alcohol',
    filtros: [
      {
        nombre: 'Cervezas'
      },
      {
        nombre: 'Aperitivos'
      },{
        nombre: 'Champagne y Espumantes'
      },
      {
        nombre: 'Bebidas Blancas y Destiladas'
      },{
        nombre: 'Whiskys'
      },
      {
        nombre: 'Conservadoras'
      },
      {
        nombre: ' '
      },
    ]           
  },{
    titulo: 'Bebidas sin Alcohol',
    filtros: [
      {
        nombre: 'Gaseosas'
      },
      {
        nombre: 'Aguas'
      },{
        nombre: 'Aguas Saborizadas'
      },{
        nombre: 'Jugos'
      },{
        nombre: 'Bebidas Isotonicas'
      },{
        nombre: 'Bebidas Amargas'
      },
      {
        nombre: 'Granadinas'
      },
    ]           
  },
  {
    titulo: 'Mascotas',
 filtros: [
      {
        nombre: 'Alimentos para Perros'
      },
      {
        nombre: 'Alimentos para Gatos'
      },{
        nombre: 'Alimentos para Peces'
      },
      {
        nombre: 'Snacks'
      },{
        nombre: 'Higiene'
      },
      {
        nombre: 'Accesorios y Juguetes'
      },
      {
        nombre: 'Collares y Correas'
      },
      {
        nombre: 'Comederos'
      }
    ]
  }, 
]



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

