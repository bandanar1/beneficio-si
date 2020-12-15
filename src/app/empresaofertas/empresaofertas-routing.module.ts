import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaofertasPage } from './empresaofertas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresaofertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaofertasPageRoutingModule {}
