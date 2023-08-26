import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule],
})
export class Tab1Page {

  password: string = "";
  status: string = "Não Logado";
  desativado: string = "false";
  attempts: number = 0;

  logar(){

    if(this.password === "senha"){
      this.status = "Logado";
      this.desativado = "true";
    }

    if(this.attempts === 2 && this.status === "Não Logado") {
      this.desativado = "true";
    }

    console.log("tentativas ", this.attempts);
    this.attempts ++;
  }
  constructor() {}
}
