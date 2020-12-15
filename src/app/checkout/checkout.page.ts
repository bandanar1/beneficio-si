import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../servicios/productos.service';
import { BehaviorSubject } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  carrito = [];
  products = [];
  contadorItems: BehaviorSubject<number>;
  subtotal: BehaviorSubject<number>;
  payMethod = 'Efectivo';
  payMethodIcon = "md-cash";


  constructor(
    public productosService: ProductosService,
    public alertController: AlertController
  ) { }


  ngOnInit() {
    this.carrito = this.productosService.getCarrito();
    this.contadorItems = this.productosService.getContadorItems();
    this.subtotal = this.productosService.obtenerSubtotal();
  }


  agregarProducto(product) {
    this.productosService.agregarProducto(product);
  }

  disminuirProducto(product) {
    if (product.cantidad == 1) {
      this.alertController.create({
        header: '¿Desea eliminar este producto?',
        buttons: [
          {
            text: 'No'
          },
          {
            text: 'Si',
            handler: () => {
              this.productosService.disminuirProducto(product);
            }
          }
        ]
      }).then(a => {
        a.present();
      })
    } else {
      this.productosService.disminuirProducto(product);
    }
  }

  changePayMethod() {
    this.alertController.create({
      message: '¿Desea cambiar el metodo de pago?',
      inputs: [
        {
          label: 'Efectivo',
          type: 'radio',
          checked: false,
          value: {
            value: 'Efectivo',
            icon: 'md-cash'
          }          
        },
        {
          label: 'Transferencia',
          type: 'radio',
          checked: false,
          value: {
            value: 'Transferencia',
            icon: 'md-redo'
          }          
        },
        {
          label: 'Tarjeta',
          type: 'radio',
          checked: false,
          value: {
            value: 'Tarjeta',
            icon: 'md-card'
          }          
        }
      ],
      buttons: [
        {
          text: 'no',
        },

        {
          text: 'si',
          handler: data =>{
            this.payMethod = data.value;
            this.payMethodIcon = data.icon;
          }
        },
      ]
    }).then(a => {
      a.present();
    })
  }

}




