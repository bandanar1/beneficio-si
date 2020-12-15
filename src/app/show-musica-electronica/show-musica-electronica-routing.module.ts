import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMusicaElectronicaPage } from './show-musica-electronica.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMusicaElectronicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMusicaElectronicaPageRoutingModule {}
