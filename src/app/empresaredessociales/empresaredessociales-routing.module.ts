import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaredessocialesPage } from './empresaredessociales.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresaredessocialesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaredessocialesPageRoutingModule {}
