import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  ruta = [
    {
      direccion: 'Viamonte 2660'
    },
    {
      direccion: 'Juncal 2930'
    },
    {
      direccion: 'Larrea 755'
    },
  ]

  constructor() { }
  

  ngOnInit() {
  }

}
