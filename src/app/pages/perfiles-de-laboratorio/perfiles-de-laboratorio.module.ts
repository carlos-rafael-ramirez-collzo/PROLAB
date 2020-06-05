import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilesDeLaboratorioPageRoutingModule } from './perfiles-de-laboratorio-routing.module';

import { PerfilesDeLaboratorioPage } from './perfiles-de-laboratorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilesDeLaboratorioPageRoutingModule
  ],
  declarations: [PerfilesDeLaboratorioPage]
})
export class PerfilesDeLaboratorioPageModule {}
