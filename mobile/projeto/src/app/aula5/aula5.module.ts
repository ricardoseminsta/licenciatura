import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aula5PageRoutingModule } from './aula5-routing.module';

import { Aula5Page } from './aula5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aula5PageRoutingModule
  ],
  declarations: [Aula5Page]
})
export class Aula5PageModule {}
