import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HemostasiaPageRoutingModule } from './hemostasia-routing.module';

import { HemostasiaPage } from './hemostasia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HemostasiaPageRoutingModule
  ],
  declarations: [HemostasiaPage]
})
export class HemostasiaPageModule {}
