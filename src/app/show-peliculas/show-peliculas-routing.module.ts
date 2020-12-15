import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPeliculasPage } from './show-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPeliculasPageRoutingModule {}
