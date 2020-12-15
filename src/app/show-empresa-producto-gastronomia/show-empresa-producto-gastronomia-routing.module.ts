import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowEmpresaProductoGastronomiaPage } from './show-empresa-producto-gastronomia.page';

const routes: Routes = [
  {
    path: '',
    component: ShowEmpresaProductoGastronomiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowEmpresaProductoGastronomiaPageRoutingModule {}
