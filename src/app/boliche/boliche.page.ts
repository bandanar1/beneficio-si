import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosPage } from '../filtros/filtros.page';


@Component({
  selector: 'app-boliche',
  templateUrl: './boliche.page.html',
  styleUrls: ['./boliche.page.scss'],
})
export class BolichePage implements OnInit {

 slideOption = {
      slidesPerView: 4


}
slideOption2 = {
  slidesPerView: 2



}
filtros = [
  {
    titulo: 'After',
           
  },
  {
    titulo: 'Bar',
       
  },
  {
    titulo: 'Bar & Boliche',
    
  }, {
    titulo: 'Cena Show Disco',
    
  },{
    titulo: 'Sector VIP',
    
  },{
    titulo: 'Egresados',
    
  },{
    titulo: 'Festival',
    
  },{
    titulo: 'Recital',
    
  },{
    titulo: 'Cachengue',
    
  },{
    titulo: 'Cumbia',
    
  },{
    titulo: 'Electronica',
    
  },{
    titulo: 'Funny Music',
    
  },{
    titulo: 'House',
    
  },{
    titulo: 'Reggaeton',
    
  },{
    titulo: 'Rock Nacional',
    
  },{
    titulo: 'Rock Internacional',
    
  },{
    titulo: 'R&E',
    
  },{
    titulo: 'Techno',
    
  },{
    titulo: 'Ambiente',
    
  },{
    titulo: 'Banda',
    
  },{
    titulo: 'Blues',
    
  },{
    titulo: 'Clasica',
    
  },{
    titulo: 'Dustep',
    
  },{
    titulo: 'Funk',
    
  },{
    titulo: 'Grupera',
    
  },{
    titulo: 'Heavy Metal',
    
  },{
    titulo: 'Indie Dance',
    
  },{
    titulo: 'Internacional',
    
  },{
    titulo: 'Inclusivo',
    
  },{
    titulo: 'Jazz',
    
  },{
    titulo: 'Mayores de 15 años',
    
  },{
    titulo: 'Mayores de 18 años',
    
  },{
    titulo: 'Mayores de 21 años',
    
  },{
    titulo: 'Mayores de 40 años',
    
  },{
    titulo: 'Metallica',
    
  },{
    titulo: 'Oldies',
    
  },{
    titulo: 'Punk',
    
  },{
    titulo: 'Rap',
    
  },{
    titulo: 'Salsa',
    
  },{
    titulo: 'Romantica',
    
  },{
    titulo: 'Reggae',
    
  },{
    titulo: 'Soul',
    
  },
]









filtrostarjetas = [
  {
    titulo: 'Tarjetas de Bancos',
    filtros: [
      {
        nombre: 'Galicia',
        children: [
          {
          cardName: 'Tarjeta de Debito Eminent',
          
          },{

            cardName: 'Eminent American Express Platinum',
          },{

            cardName: 'Eminent Visa Platinum',
          },{

            cardName: 'Mastercard Platinum',
          },{

            cardName: 'Eminent Visa Signature',
          },{

            cardName: 'Eminent Mastercard Black',
          },{

            cardName: 'Eminent American Express Black',
          },{

            cardName: 'Visa Internacional',
          },{

            cardName: 'American Express Internacional',
          },{

            cardName: 'Mastercard Internacional',
          },{

            cardName: 'Tarjeta de Debito',
          },{

            cardName: 'Tarjeta de Debito Visa Gold',
          },{

            cardName: 'TDC American Express Gold',
          },{

            cardName: 'Tarjeta de Debito Martercard Gold',
          },

          
        ]
      },
      {
        nombre: 'Ciudad',
        children: [
          {
            cardName:'Visa Gold',            
          },
          {
            cardName: 'Visa Internacional',
          },{

            cardName: 'Visa Platinum',
          },{

            cardName: 'Visa Signature',
          },{

            cardName: 'Mastercard Gold',
          },{

            cardName: 'Mastercard Premium',
          },{

            cardName: 'Nastercard Internacional',
          },{

            cardName: 'Mastercard Black',
          },{

            cardName: 'Tarjeta de Debito',
          },
        ]
      },
      {
        nombre: 'Provincia',
        children: [
          {
            cardName:'Tarjeta de Debito Visa',            
          },
          {
            cardName: 'Tarjeta de Credito Visa',
          },{

            cardName: 'Tarjeta de Credito Mastercard',
          },
        ]
      },
      {
        nombre: 'Patagonia',
        children: [
          {
            cardName:'Visa Classic',            
          },
          {
            cardName: 'Visa Gold',
          },{

            cardName: 'Visa Auto',
          },{

            cardName: 'Mastercard MercadoPago',
          },
        ]
      },
      {
        nombre: 'BancoCredicorp',
        children: [
          {
            cardName:'Tarjeta de Debito',            
          },
          
        ]
      },
      {
        nombre: 'Santander',
        children: [
          {
            cardName:'American Express',            
          },
          {
            cardName: 'American Express Gold',
          },{

            cardName: 'American Express Platinum',
          },{

            cardName: 'American Express Black',
          },{

            cardName: 'Visa Internacional',
          },{

            cardName: 'Visa Gold',
          },{

            cardName: 'Visa Platinum',
          },{

            cardName: 'Visa Black',
          },
        ]
      },
      {
        nombre: 'ICBC',
        children: [
          {
            cardName:'Mastercard Black',            
          },
          {
            cardName: 'Mastercard Platinum',
          },{

            cardName: 'Mastercad Gold',
          },{

            cardName: 'Mastercard Internacional',
          },{

            cardName: 'Start Mastercard',
          },{

            cardName: 'Visa Signature',
          },{

            cardName: 'Visa Platinum',
          },{

            cardName: 'Visa Gold',
          },{

            cardName: 'Visa Internacional',
          },{

            cardName: 'Start Visa',
          },{

            cardName: 'Visa Debito',
          },
        ]
      },
      {
         nombre: 'Banco de la Pampa',
        children: [
          {
            cardName:'Tarjeta de Debito',            
          },
          
        ]
      },
      {
        nombre: 'Chile',
        children: [
          {
            cardName:'Tarjeta de Debito',            
          },
          
        ]
      },
      {
        nombre: 'Nación',
        children: [
          {
            cardName:'Nativa Mastercard',            
          },{
            cardName:'Nativa Visa',            
          },{
            cardName:'Mastercard',            
          },{
            cardName:'Visa',            
          },
          
        ]
      },
      {
        nombre: 'Macro',
        children: [
          {
            cardName:'Visa Macro',            
          },{
            cardName:'Visa Gold',            
          },{
            cardName:'Visa Platinum',            
          },{
            cardName:'Mastercard Macro',            
          },{
            cardName:'Mastercard Gold',            
          },{
            cardName:'Mastercard Platinum',            
          },{
            cardName:'American Express Macro',            
          },{
            cardName:'American Express Gold',            
          },{
            cardName:'American Express Platinum',            
          },{
            cardName:'Visa Signature Macro Selecta',            
          },{
            cardName:'Mastercard Black Macro Selecta',            
          },{
            cardName:'American Express Macro Selecta',            
          },
          
        ]
      },
      {
        nombre: 'BBVA',
        children: [
          {
            cardName:'Latam PASS',            
          },{
            cardName:'Visa Classic',            
          },{
            cardName:'Visa Gold',            
          },{
            cardName:'Visa Platinum Latam PASS',            
          },{
            cardName:'Visa Signature Latam PASS',            
          },{
            cardName:'Mastercard',            
          },{
            cardName:'Mastercard Gold',            
          },{
            cardName:'Mastercard Platinum Latam PASS',            
          },{
            cardName:'Mastercard Black Latam PASS',            
          },
          
        ]
      },
      {
        nombre: 'Itaú',
        children: [
          {
            cardName:'Visa Internacional',            
          },{
            cardName:'Mastercard Internacional',            
          },{
            cardName:'Visa Gold',            
          },{
            cardName:'Mastercard Gold',            
          },{
            cardName:'Visa Platinum',            
          },{
            cardName:'Mastercard Platinum',            
          },{
            cardName:'Visa Signature',            
          },{
            cardName:'Mastercard Black',            
          },
          
        ]
      },
      {
        nombre: 'HSBC',
        children: [
          {
            cardName:'Visa Internacional',            
          },{
            cardName:'Visa Gold',            
          },{
            cardName:'Visa Platinum',            
          },{
            cardName:'Visa Signature',            
          },{
            cardName:'Mastercard Internacional',            
          },{
            cardName:'Mastercard Gold',            
          },{
            cardName:'Mastercard Premier',            
          },{
            cardName:'Mastercard Black',          
          },{
            cardName:'American Express Internacional',            
          },{
            cardName:'American Express Gold',            
          },{
            cardName:'American Express Platinum',            
          },
          
        ]
      },
      {
        nombre: 'Comafí',
        children: [
          {
            cardName:'Visa Internacional',            
          },{
            cardName:'Visa Gold',            
          },{
            cardName:'Visa Platinum',            
          },{
            cardName:'Visa Signature',            
          },{
            cardName:'Mastercard Internacional',            
          },{
            cardName:'Mastercard Gold',            
          },{
            cardName:'Mastercard Platinum',            
          },{
            cardName:'Mastercard Black',            
          },
          
        ]
      },
      {
        nombre: 'Hipotecario',
        children: [
          {
            cardName:'Tarjeta de Debito',            
          },
          
        ]
      },
      {
        nombre: 'Supervielle',
        children: [
          {
            cardName:'Visa Gold',            
          },{
            cardName:'Visa Platinum',            
          },{
            cardName:'Visa Signature',            
          },{
            cardName:'Mastercard Internacional',            
          },{
            cardName:'Mastercard Gold',            
          },{
            cardName:'Mastercard Platinum',            
          },{
            cardName:'Mastercard Black',            
          },
          
        ]
      },
      {
        nombre: 'Tarjeta Naranja',
        children: [
          {
            cardName:'Visa',            
          },{
            cardName:'Mastercard',            
          },{
            cardName:'American Express',            
          },
          
        ]
      },
    ]           
  },
  {
    titulo: 'Tarjetas de Supermercados',
    filtros:[
      {
        nombre: 'Club la Nacion Black ',
        toggle: true
      },
      {
        nombre: 'Club la Nacion Platinum'
      },
      {
        nombre: 'Clarin 365'
      },
    ]      
  },
  {
    titulo: 'Tarjetas de Descuentos',
 filtros: [
      {
        nombre: 'Coto Digital'
      },
      {
        nombre: 'Vea Digital'
      },
      {
        nombre: 'Tarjeta Disco'
      },
      {
        nombre: 'Club Dia'
      }
    ]
  }, 
]








 
constructor(private modalController: ModalController) { }



  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FiltrosPage
    });
    return await modal.present();
  }
  }  
  
  
    
  
