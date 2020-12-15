import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productos } from '../interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  data: Productos[] = [
    {
      id: 1,
      nombre: 'lasaña',
      precio: 1000,
      imagen: '../../assets/imgs/lasagna.png',
      tipoDeComensal: 'Vegetariano',
      descripcion: 'Lasagna',
      cantidad: 1,
    },
    {
      id: 2,
      nombre: 'hamburguesa',
      precio: 1000,
      imagen: '../../assets/imgs/hamburguesa.png',
      tipoDeComensal: 'Vegetariano',
      descripcion: 'Hamburguesa ',
      cantidad: 1,
    },
    {
      id: 3,
      nombre: 'ravioles',
      precio: 1000,
      imagen: '../../assets/imgs/ravioles.png',
      tipoDeComensal: 'Vegetariano',
      descripcion: 'Ravioles',
      cantidad: 1,
    },
    {
      id: 4,
      nombre: 'carbonara',
      precio: 1000,
      imagen: '../../assets/imgs/carbonara.png',
      tipoDeComensal: 'Vegetariano',
      descripcion: ' Carbonara',
      cantidad: 1,
    },
    {
      id: 5,
      nombre: 'pizza',
      precio: 1000,
      imagen: '../../assets/imgs/pizza.png',
      tipoDeComensal: 'Dieta',
      descripcion: 'Pizza ',
      cantidad: 1,
    }
  ]

  private carrito = [];
  private contadorItems = new BehaviorSubject(0);
  private subtotalCarrito = new BehaviorSubject(0);

  constructor() { }


  obtenerSubtotal() {
    return this.subtotalCarrito;
  }

  obtenerProductos() {
    return this.data;
  }

  getCarrito() {
    return this.carrito;
  }

  getContadorItems() {
    return this.contadorItems;
  }

  agregarProducto(product) {
    let added = false;
    for (let producto of this.carrito) {
      if (producto.id === product.id) {
        producto.cantidad += 1;
        added = true;
        break;
      }
    }

    if (!added) {
      this.carrito.push(product)
    }
    this.contadorItems.next(this.contadorItems.value +1);
    this.subtotalCarrito.next(this.subtotalCarrito.value + product.precio);

  }


  disminuirProducto(product) {
    for (let [index, p] of this.carrito) {
      if (p.id === product.id) {
        p.cantidad -= 1;
        if (p.cantidad == 0) {
          this.carrito.splice(index, 1);
        }
      }

    }

    this.contadorItems.next(this.contadorItems.value - 1);
    this.subtotalCarrito.next(this.subtotalCarrito.value - product.precio);

  }


  removerProducto(product) {
    for (let [index, p] of this.carrito) {
      if (p.id === product.id) {
        this.contadorItems.next(this.contadorItems.value - p.amount);
        this.carrito.splice(index, 1);
      }
    }
  }
}