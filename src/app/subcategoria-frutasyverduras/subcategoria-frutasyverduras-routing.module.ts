import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoriaFrutasyverdurasPage } from './subcategoria-frutasyverduras.page';

const routes: Routes = [
  {
    path: '',
    component: SubcategoriaFrutasyverdurasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoriaFrutasyverdurasPageRoutingModule {}
