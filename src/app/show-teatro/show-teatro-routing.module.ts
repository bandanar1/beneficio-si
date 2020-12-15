import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowTeatroPage } from './show-teatro.page';

const routes: Routes = [
  {
    path: '',
    component: ShowTeatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowTeatroPageRoutingModule {}
