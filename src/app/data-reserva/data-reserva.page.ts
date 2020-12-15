import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-data-reserva',
  templateUrl: './data-reserva.page.html',
  styleUrls: ['./data-reserva.page.scss'],
})
export class DataReservaPage implements OnInit {

  lista = [];

  cargando = false;

  telefono = '1168451335';
  comentario = '';
  boton123 = 1;

  @ViewChild('slider1', {static: false}) slider: any;

  validar = {
    isSetPersonas: false,
    isSetFecha: false,
    isSetHora: false,
  }

  todoCorrecto = false;

  personas = [
    {
      titulo: '1 persona',
      valor: 1
    },
    {
      titulo: '2 persona',
      valor: 2
    },
    {
      titulo: '3 persona',
      valor: 3
    },
    {
      titulo: '4 persona',
      valor: 4
    },
    {
      titulo: '5 persona',
      valor: 5
    },
    {
      titulo: '6 persona',
      valor: 6
    },
    {
      titulo: '7 persona',
      valor: 7
    },
    {
      titulo: '8 persona',
      valor: 8
    },
    {
      titulo: '9 persona',
      valor: 9
    },
    {
      titulo: '10 persona',
      valor: 10
    }
  ];

  contador = 0;

  queDia = [];
  queHora = [];
  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo',]
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  datos = {
    personas: 0,
    fecha1: {
      dia: 'lunes',
      fecha: Number(new Date().getDay()),
      mes: this.meses[new Date().getMonth()]
    },
    hora: '00:00'
  }

  slideOpts = {
    allowTouchMove: false
  }


  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    for (let index = 1; index < 32; index++, this.contador++) {
      if (this.contador < 7) {
        this.queDia.push({ dia: this.dias[this.contador], fecha: index, mes: this.meses[new Date().getMonth()] });
      } else {
        this.contador = 0;
        this.queDia.push({ dia: this.dias[this.contador], fecha: index, mes: this.meses[new Date().getMonth()] });
      }
    }
    for (let hora = 0; hora < 24; hora++) {
      if (hora < 10) {
        var valor1 = '0' + hora + ':' + '00';
        var valor2 = '0' + hora + ':' + '30';
      } else {
        valor1 = hora + ':' + '00';
        valor2 = hora + ':' + '30';
      }
      this.queHora.push(valor1, valor2);
    }
    this.lista = [
      { selected: false, titulo: '¿Para cuántas personas?', titulo2: 'personas', listado: this.personas, icon: 'people', show: true },
      { selected: false, titulo: '¿Que Dia?', titulo2: 'Día', listado: this.queDia, icon: 'calendar', show: false },
      { selected: false, titulo: '¿A Que Hora?', titulo2: 'Hora', listado: this.queHora, icon: 'time', show: false }];
    console.log(this.lista);
  }

  ngAfterViewInit() {
    console.log(this.slider);
  }

  setPersonas(personas) {
    this.validar.isSetPersonas = true;
    this.datos.personas = personas;
    this.validacion();
  }

  setFecha(fecha) {
    this.validar.isSetFecha = true;
    this.datos.fecha1.dia = fecha.dia;
    this.datos.fecha1.fecha = fecha.fecha;
    this.datos.fecha1.mes = fecha.mes;
    this.validacion();
  }

  setHora(hora) {
    this.validar.isSetHora = true;
    this.datos.hora = hora;
    this.validacion();
  }

  validacion() {
    if (this.validar.isSetPersonas && this.validar.isSetFecha && this.validar.isSetHora) {
      this.todoCorrecto = true;
    } else {
      return this.todoCorrecto = false;
    }
  }

  atras() {
    if (this.boton123 > 1) {
      this.boton123--;
    }
    this.slider.slidePrev();
    console.log(this.boton123);
  }

  siguiente() {
    if (this.boton123 < 3) {
      switch (this.boton123) {
        case 1:
          this.slider.slideNext();
          this.boton123++;
          console.log(this.boton123);
          break;

        case 2:
          this.cargando = true;
          setTimeout(() => {
            this.cargando = false;
            this.slider.slideNext();
            this.boton123++;
            console.log(this.boton123);
          }, 3000);
          break;

        case 3:
          this.boton123++;
          console.log(this.boton123);
          break;
      }
    }
  }

  reservaCancelada(){
    this.loadingCtrl.create({
      spinner: 'lines',
      duration: 3000
    }).then(l => {
      l.present();
      l.onDidDismiss().then(()=>{
        this.navCtrl.navigateRoot('reserva-restaurant').then(()=>{
          this.presentToast('La reserva ha sido cancelada', 'danger');
        });
      })      
    })
  }

  presentToast(mensaje: string, color: string){
    this.toastCtrl.create({
      message: mensaje,
      color: color,
      duration: 2500
    }).then(t =>{
      t.present();
    })
  }

  cacelarReserva() {
    this.alertCtrl.create({
      header: '¿Querés cancelar la reserva?',
      buttons: [
        {
          text: 'No',          
        },

        {
          text: 'si, cancelar',
          handler: ()=>{
            this.reservaCancelada();
          }
        }        
      ]
    }).then(a => {
      a.present();
    })
  }
}
