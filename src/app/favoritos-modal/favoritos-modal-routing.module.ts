import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosModalPage } from './favoritos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritosModalPageRoutingModule {}
