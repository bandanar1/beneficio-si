import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcategoriaFrutasyverdurasPageRoutingModule } from './subcategoria-frutasyverduras-routing.module';

import { SubcategoriaFrutasyverdurasPage } from './subcategoria-frutasyverduras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcategoriaFrutasyverdurasPageRoutingModule
  ],
  declarations: [SubcategoriaFrutasyverdurasPage]
})
export class SubcategoriaFrutasyverdurasPageModule {}
