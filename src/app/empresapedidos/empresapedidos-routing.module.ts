import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresapedidosPage } from './empresapedidos.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresapedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresapedidosPageRoutingModule {}
