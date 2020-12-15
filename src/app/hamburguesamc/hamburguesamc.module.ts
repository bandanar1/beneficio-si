import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamburguesamcPageRoutingModule } from './hamburguesamc-routing.module';

import { HamburguesamcPage } from './hamburguesamc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburguesamcPageRoutingModule
  ],
  declarations: [HamburguesamcPage]
})
export class HamburguesamcPageModule {}
