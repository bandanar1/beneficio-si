import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MistarjetasPage } from './mistarjetas.page';

const routes: Routes = [
  {
    path: '',
    component: MistarjetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MistarjetasPageRoutingModule {}
