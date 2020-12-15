import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-mision-details',
  templateUrl: './mision-details.page.html',
  styleUrls: ['./mision-details.page.scss'],
})
export class MisionDetailsPage implements OnInit {

  constructor(
    private geolocation: Geolocation
  ) { 

  }

  

  ngOnInit() {
    this.loadMap(); 
  }

  async loadMap (){
   const rta = await this.geolocation.getCurrentPosition();
   const myLatLng= {
     lat: rta.coords.latitude,
     lng: rta.coords.latitude,

   };

    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle, { 
      center: myLatLng,
      zoom: 12
    });
  }

}
