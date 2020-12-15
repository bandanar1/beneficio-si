import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspectaculosPageRoutingModule } from './espectaculos-routing.module';

import { EspectaculosPage } from './espectaculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspectaculosPageRoutingModule
  ],
  declarations: [EspectaculosPage]
})
export class EspectaculosPageModule {}
