import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowEventBolichePage } from './show-event-boliche.page';

const routes: Routes = [
  {
    path: '',
    component: ShowEventBolichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowEventBolichePageRoutingModule {}
