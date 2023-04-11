import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule],
})

export class Tab1Page {

  nota1: number;
  nota2: number;
  nota3: number;
  nota4: number;

  media:number | string;

  resultado: string;
  cor: string = "primary";

  calcularMedia(){

    if(this.nota1 === undefined || this.nota2 === undefined || this.nota3 === undefined || this.nota4 === undefined ||
      this.nota1 === null || this.nota2 === null || this.nota3 === null || this.nota4 === null){
      this.resultado = "Ausencia de notas";
      this.cor = "warning";
      this.media = "error"
      this.showMessage("digite todas as notas");
      return;
    } else {
      if(this.nota1 < 0 || this.nota2 < 0 || this.nota3 < 0 || this.nota4 < 0){
        this.resultado = "Nota Invalida";
        this.cor = "warning";
        this.media = "error"
        this.showMessage("Alguma nota recebeu o valor menor que zero");
        return;
      }
      if(this.nota1 > 10 || this.nota2 > 10 || this.nota3 > 10 || this.nota4 > 10){
        this.resultado = "Nota Invalida";
        this.cor = "warning";
        this.media = "error"
        this.showMessage("Alguma nota recebeu o valor maior que dez");
        return;
      }
      this.media = (this.nota1 + this.nota2 + this.nota3 + this.nota4)/4
      if(this.media >= 7) {
        this.resultado = "Aprovado";
        this.cor = 'success';
        return;
      }
    }

    this.resultado = "Reprovado";
    this.cor = "danger";



  }
  constructor(public alertController:AlertController) {}

  showMessage(message: string){
    this.alertController.create({
    header: 'Aviso',
    message: message,
    buttons: ['OK']
    }).then(res => {
    res.present();
    });
    }
}
