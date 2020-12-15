import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapOptionsPage } from './map-options.page';

const routes: Routes = [
  {
    path: '',
    component: MapOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapOptionsPageRoutingModule {}
