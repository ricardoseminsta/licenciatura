import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aula03PageRoutingModule } from './aula03-routing.module';

import { Aula03Page } from './aula03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aula03PageRoutingModule
  ],
  declarations: [Aula03Page]
})
export class Aula03PageModule {}
