import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaveresumenPage } from './empresaveresumen.page';

const routes: Routes = [
  {
    path: '',
    component: EmpresaveresumenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaveresumenPageRoutingModule {}
