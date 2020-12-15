import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPersonaPage } from './registro-persona.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPersonaPageRoutingModule {}
