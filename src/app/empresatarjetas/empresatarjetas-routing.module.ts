import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresatarjetasPage } from './empresatarjetas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresatarjetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresatarjetasPageRoutingModule {}
