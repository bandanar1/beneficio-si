import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowSupermarketPage } from './show-supermarket.page';

const routes: Routes = [
  {
    path: '',
    component: ShowSupermarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowSupermarketPageRoutingModule {}
