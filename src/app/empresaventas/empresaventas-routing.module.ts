import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaventasPage } from './empresaventas.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresaventasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaventasPageRoutingModule {}
