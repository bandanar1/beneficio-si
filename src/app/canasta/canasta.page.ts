import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../servicios/productos.service';
import { BehaviorSubject } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-canasta',
  templateUrl: './canasta.page.html',
  styleUrls: ['./canasta.page.scss'],
})
export class CanastaPage implements OnInit {

  carrito = [];
  products = [];
  contadorItems: BehaviorSubject<number>;
  subtotal: BehaviorSubject<number>;



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
    if(product.cantidad == 1){
      this.alertController.create({
        header: '¿Desea eliminar este producto?',
        buttons: [        
          {
            text: 'No'
          },
          {
            text: 'Si',
            handler: () =>{
              this.productosService.disminuirProducto(product);
            }
          }
        ]
      }).then(a =>{
        a.present();
      })
    }else{
      this.productosService.disminuirProducto(product);
    }  
  }

}




