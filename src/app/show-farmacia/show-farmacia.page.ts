import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosPage } from '../filtros/filtros.page';

declare var google: any;
@Component({
  selector: 'app-show-farmacia',
  templateUrl: './show-farmacia.page.html',
  styleUrls: ['./show-farmacia.page.scss'],
})
export class ShowFarmaciaPage implements OnInit {

@ViewChild('googlemaps', { static: false }) googlemaps: ElementRef;
slideOption = {
  slidesPerView: 4


}
slideOption2 = {
slidesPerView: 2



}

filtros = [
  {
    titulo: 'Cuidado Capilar',
    filtros: [
      {
        nombre: 'Shampoo'
      },
      {
        nombre: 'Acondicionador'
      },{
        nombre: 'Enjuages'
      },{
        nombre: 'Balsamos'
      },{
        nombre: 'Modelados y Peinados'
      },{
        nombre: 'Reparacion y Tratamiento'
      },
      {
        nombre: 'Coloracion y Oxidantes'
      },
    ]           
  },
  {
    titulo: 'Belleza y Maquillaje',
    filtros:[
      {
        nombre: 'Mascaras'
      },
      {
        nombre: 'Labiales'
      },{
        nombre: 'Desmaquillantes'
      },{
        nombre: 'Correctores'
      },
      {
        nombre: 'Bases'
      },
      {
        nombre: 'Esmaltes'
      },
      {
        nombre: 'Sombras'
      },
      {
        nombre: 'Accesorios'
      },
      {
        nombre: 'Brochas y Pinceles'
      },
      {
        nombre: 'Espejos'
      },
      {
        nombre: 'Esponjas y Cisnes'
      },
      {
        nombre: 'Secadores'
      },
      {
        nombre: 'Polvos y Rubores'
      },
      {
        nombre: 'Cuidado de Manos y Pies'
      },
      {
        nombre: 'Delineadores'
      },
      {
        nombre: 'Quita Esmalte'
      },
      {
        nombre: 'Tratamiento'
      },
      {
        nombre: 'Cepillos y Peines '
      },
      {
        nombre: 'Secadores'
      },
      {
        nombre: 'Fijadores de Esmalte'
      },

    ]      
  },{
    titulo: 'Cuidado Personal',
    filtros: [
      {
        nombre: 'Afeitado y Depilacion'
      },
      {
        nombre: 'Jabones y Gel De Ducha'
      },{
        nombre: 'Proteccion Femenina'
      },
      {
        nombre: 'Proteccion para Adultos'
      },
    ]           
  },{
    titulo: 'Alimentos y Bebidas',
    filtros: [
      {
        nombre: 'Alfajores'
      },
      {
        nombre: 'Golosinas'
      },
      {
        nombre: 'Cereales y Granos'
      },
      {
        nombre: 'Galletitas y Snack'
      },
      {
        nombre: 'Semilla y Frutos Secos'
      },
      {
        nombre: 'Apto para Celiacos'
      },
      {
        nombre: 'Almacen '
      },
      {
        nombre: 'Bebidas'
      },
      {
        nombre: 'Gaseosas'
      },
      {
        nombre: ' Jugos'
      },
    ]           
  },{
    titulo: 'Perfumes y Fragancias',
    filtros: [
      {
        nombre: 'Desodorantes'
      },
      {
        nombre: 'Perfumes'
      },
      {
        nombre: 'Colonia y Body Splash'
      },
      {
        nombre: 'Bebes y Niños'
      },
      {
        nombre: 'Set de Cofres'
      },
    ]           
  },{
    titulo: 'Cuidado Corporal',
    filtros: [
      {
        nombre: 'Cremas Corporales'
      },
      {
        nombre: 'Crema Facial'
      },
      {
        nombre: 'Protectores Solares'
      },
      {
        nombre: 'Rostros'
      },
      
    ]           
  },{
    titulo: 'Cuidado de la Salud',
    filtros: [
      {
        nombre: 'Alcohol'
      },
      {
        nombre: 'Curitas'
      },
      {
        nombre: 'Baño e Higiene'
      },
      {
        nombre: 'Optica'
      },
      {
        nombre: 'Vendas y Gasas'
      },
      {
        nombre: 'Termometro'
      },
      {
        nombre: 'Tapones para Oidos'
      },
      {
        nombre: 'Pastilleros y Ordenadores'
      },
      {
        nombre: 'Plantilla y Taloneras'
      },

      {
        nombre: 'Accesorios'
      },
      {
        nombre: 'Balanzas'
      },
      {
        nombre: 'Nebulizador'
      },
      {
        nombre: 'Postulares'
      },
      {
        nombre: 'Tensiometros'
      },
      {
        nombre: 'Vaporizadores y Humificadores'
      },
      {
        nombre: 'Bolsas y Geles Refrigerantes'
      },

    ]           
  },{
    titulo: 'Cuidado Oral',
    filtros: [
      {
        nombre: 'Accesorio y Adhesivos Dentales'
      },
      {
        nombre: 'Cepillos Dentales'
      },{
        nombre: 'Cremas y Enguajes Dentales'
      },{
        nombre: 'Blanqueadores'
      }
    ]           
  },{
    titulo: 'Hogar',
    filtros: [
      {
        nombre: 'Papel Higienico y Servilletas'
      },
      {
        nombre: 'Accesorios de Limpieza'
      },
      {
        nombre: 'Aromatizantes'
      },{
        nombre: 'Cocinas'
      },{
        nombre: 'Cuidado de la Ropa'
      },{
        nombre: 'Decoracion'
      },{
        nombre: 'Desinfeccion'
      },{
        nombre: 'Repelentes'
      },
      {
        nombre: 'Desinfectantes'
      },
    ]           
  },{
    titulo: 'Nutricion y Deportes',
    filtros: [
      {
        nombre: 'Barras Energeticas'
      },
      {
        nombre: 'Invierno y Defensas'
      },
      {
        nombre: 'Proteinas'
      },
      {
        nombre: 'Salud del Corazon'
      },
      {
        nombre: 'Alimentos Nutraceicos'
      },
      {
        nombre: 'Control de Peso'
      },
      {
        nombre: 'Energizantes'
      },
      {
        nombre: 'Antoxidantes'
      },
      {
        nombre: 'Creatina'
      },
      {
        nombre: 'Digestivos'
      },
      {
        nombre: 'Flebotonicos'
      },
      {
        nombre: 'Ganadores de Pesos'
      },
      {
        nombre: 'Geles'
      },
      {
        nombre: 'Levadura de Cerveza'
      },
      {
        nombre: 'Multivitaminico'
      },
      {
        nombre: 'Muñequeras y Coderas'
      },
      {
        nombre: 'Celulitis'
      },
      {
        nombre: 'Climaterio'
      },
      {
        nombre: 'Falta de Sueño'
      },
      {
        nombre: 'Hueso y Articulaciones'
      },
      {
        nombre: 'Memoria'
      },
      {
        nombre: 'Minerales'
      },
      {
        nombre: 'Refrigerante'
      },
      {
        nombre: 'Salud Intestinal'
      },
      {
        nombre: 'Aminoacido'
      },
      {
        nombre: 'Pastillas Bronceadoras'
      },
    ]           
  },{
    titulo: 'Soluciones Basicas',
    filtros: [
      {
        nombre: 'Pilas y Baterias'
      },
      {
        nombre: 'Accesorias para Viajes'
      },{
        nombre: 'Lapices y Lapiceros'
      },{
        nombre: 'Indumentaria'
      },
    ]           
  },{
    titulo: 'Bienestar Sexual',
    filtros: [
      {
        nombre: 'Preservativos'
      },
      {
        nombre: 'Lubricantes'
      },

      {
        nombre: 'Juguetes Eroticos'
      },
    ]           
  },{
    titulo: 'Bebes y Maternidad',
    filtros: [
      {
        nombre: 'Chupetes y Mordillos'
      },
      {
        nombre: 'Pañales y Toallas Humedas'
      },{
        nombre: 'Nutricion Infantil'
      },
      {
        nombre: 'Shamppo y Enguajes'
      },{
        nombre: 'Jabones'
      },
      {
        nombre: 'Aceites y Olios'
      },{
        nombre: 'Cremas y Emulzones'
      },
      {
        nombre: 'Protectores Mamarios'
      },{
        nombre: 'Apositos'
      },
      {
        nombre: 'Cepillos Dentales'
      },{
        nombre: 'Accesorios'
      },
      {
        nombre: 'Accesorios Para Cochesitos'
      },{
        nombre: 'Cepillos y Peines'
      },
      {
        nombre: 'Cuidado de las Uñas'
      },{
        nombre: 'Fajas'
      },
      
    ]           
  },{
    titulo: 'Dermocostemica',
    filtros: [
      {
        nombre: 'Dermocostemicos'
      },
      
    ]           
  },{
    titulo: 'Electro',
    filtros: [
      {
        nombre: 'Electro'
      },
      ]           
  },{
    titulo: 'Belleza y Dermocosmetico',
    filtros: [
      {
        nombre: 'Elvive'
      },
      {
        nombre: 'Fructis'
      },{
        nombre: 'Granier'
      },{
        nombre: 'Loreal Paris'
      },{
        nombre: 'Maybeline'
      },{
        nombre: 'Vichy'
      },
      {
        nombre: 'La Roche-Posay'
      },
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

