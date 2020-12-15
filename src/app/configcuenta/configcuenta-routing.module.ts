import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigcuentaPage } from './configcuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigcuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigcuentaPageRoutingModule {}
