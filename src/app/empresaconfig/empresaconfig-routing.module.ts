import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaconfigPage } from './empresaconfig.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresaconfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaconfigPageRoutingModule {}
