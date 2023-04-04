import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  valorTotal: number = 0;

  valorEntrada: number = 0;
  valorSaida: number = 0;

  classe:string = 'success';



  somar(){
    let valor = 1;
    this.valorTotal = this.valorTotal + valor;
    this.valorEntrada ++;

  this.verificarCor()
  }

  subtrair() {
    let valor = 1;
    this.valorTotal = this.valorTotal - valor;
    this.valorSaida --;
    this.verificarCor()
  }

  verificarCor(){
    if(this.valorTotal > 0) this.classe = "primary";
    else if (this.valorTotal == 0) this.classe = "success";
    else this.classe = "danger";
  }

  constructor() {}
}
