import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aula5Page } from './aula5.page';

const routes: Routes = [
  {
    path: '',
    component: Aula5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aula5PageRoutingModule {}
