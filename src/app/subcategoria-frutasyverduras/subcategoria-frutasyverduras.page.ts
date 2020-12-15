import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-subcategoria-frutasyverduras',
  templateUrl: './subcategoria-frutasyverduras.page.html',
  styleUrls: ['./subcategoria-frutasyverduras.page.scss'],
})
export class SubcategoriaFrutasyverdurasPage implements OnInit {

  


  filtros = [
    {
      nombre: 'Dieta'
    },
    {
      nombre: 'Vegetariano'
    },
    {
      nombre: 'Vegano'
    },
  ]

  carrito=[];
  productos=[];
  contadorItems: BehaviorSubject<number>;
  subtotal: BehaviorSubject<number>;

  productosFiltrados = [];

  constructor( 
    public productosService: ProductosService
  ) { }

  ngOnInit() {
    this.subtotal = this.productosService.obtenerSubtotal();

    this.productos = this.productosService.obtenerProductos();

    this.carrito = this.productosService.getCarrito();

    this.contadorItems = this.productosService.getContadorItems();

    this.initializeItems();
  }

  agregarProducto(producto){
    this.productosService.agregarProducto(producto);

  };

  initializeItems(): void {
    this.productosFiltrados = this.productos;
  }

  filtrar(event) {
    this.initializeItems();

    const valorbuscado = event;

    if (!valorbuscado) {
      return;
    }

    this.productosFiltrados = this.productosFiltrados.filter(producto => {
      if (producto.tipoDeComensal && valorbuscado) {
        if (producto.tipoDeComensal.toLowerCase().indexOf(valorbuscado.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  filtrarPorSearchBar(event) {
    this.initializeItems();

    const valorbuscado = event.target.value;

    if (!valorbuscado) {
      return;
    }

    this.productosFiltrados = this.productosFiltrados.filter(producto => {
      if (producto.nombre && valorbuscado) {
        if (producto.nombre.toLowerCase().indexOf(valorbuscado.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }


}

