import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowComidaItalianaPage } from './show-comida-italiana.page';

const routes: Routes = [
  {
    path: '',
    component: ShowComidaItalianaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowComidaItalianaPageRoutingModule {}
