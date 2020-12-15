import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroEmpresaPage } from './registro-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroEmpresaPageRoutingModule {}
