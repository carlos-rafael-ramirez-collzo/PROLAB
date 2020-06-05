import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiquidosBiologicosPageRoutingModule } from './liquidos-biologicos-routing.module';

import { LiquidosBiologicosPage } from './liquidos-biologicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiquidosBiologicosPageRoutingModule
  ],
  declarations: [LiquidosBiologicosPage]
})
export class LiquidosBiologicosPageModule {}
