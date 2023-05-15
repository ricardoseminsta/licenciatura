import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Questao2PageRoutingModule } from './questao2-routing.module';

import { Questao2Page } from './questao2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Questao2PageRoutingModule
  ],
  declarations: [Questao2Page]
})
export class Questao2PageModule {}
