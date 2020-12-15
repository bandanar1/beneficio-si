import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Nueva1PageRoutingModule } from './nueva1-routing.module';

import { Nueva1Page } from './nueva1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Nueva1PageRoutingModule
  ],
  declarations: [Nueva1Page]
})
export class Nueva1PageModule {}
