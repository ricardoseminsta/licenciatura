import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AulaForPageRoutingModule } from './aula-for-routing.module';

import { AulaForPage } from './aula-for.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AulaForPageRoutingModule
  ],
  declarations: [AulaForPage]
})
export class AulaForPageModule {}
