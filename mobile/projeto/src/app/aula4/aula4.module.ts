import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aula4PageRoutingModule } from './aula4-routing.module';

import { Aula4Page } from './aula4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aula4PageRoutingModule
  ],
  declarations: [Aula4Page]
})
export class Aula4PageModule {}
