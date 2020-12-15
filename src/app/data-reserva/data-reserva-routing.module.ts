import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataReservaPage } from './data-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: DataReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataReservaPageRoutingModule {}
