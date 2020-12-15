import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPelicula2Page } from './show-pelicula2.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPelicula2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPelicula2PageRoutingModule {}
