import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspectaculosPage } from './espectaculos.page';

const routes: Routes = [
  {
    path: '',
    component: EspectaculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspectaculosPageRoutingModule {}
