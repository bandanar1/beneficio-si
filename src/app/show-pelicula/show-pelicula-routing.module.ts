import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPeliculaPage } from './show-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPeliculaPageRoutingModule {}
