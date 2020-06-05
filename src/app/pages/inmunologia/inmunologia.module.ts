import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmunologiaPageRoutingModule } from './inmunologia-routing.module';

import { InmunologiaPage } from './inmunologia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmunologiaPageRoutingModule
  ],
  declarations: [InmunologiaPage]
})
export class InmunologiaPageModule {}
