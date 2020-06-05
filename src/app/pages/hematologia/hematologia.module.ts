import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HematologiaPageRoutingModule } from './hematologia-routing.module';

import { HematologiaPage } from './hematologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HematologiaPageRoutingModule
  ],
  declarations: [HematologiaPage]
})
export class HematologiaPageModule {}
