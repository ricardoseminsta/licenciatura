import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule]
})
export class Tab2Page {
  dia: string;
  mes: string;
  ano: string;
  aviso:string = '';
  diaSemana: string = '';
  constructor() {}

  calcularDiaSemana(){
    if(this.dia == undefined || this.mes == undefined || this.ano == undefined ||
      this.dia.toString().length > 2 || this.mes.toString().length > 2 || this.ano.toString().length > 4 || undefined){
      this.aviso = 'Digite uma data valida';
      this.diaSemana = "error - digite uma data valida";
      console.log(this.dia);

      return;
    }
    const diaSemana = new Date(`${this.ano}-${this.mes}-${this.dia}`)
    const diaSemanaStr = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    this.diaSemana = diaSemanaStr[diaSemana.getDay()];
    this.aviso = '';
    console.log("entrou", diaSemana);
    console.log("dia tamanho", this.dia.toString().length);

  }
}
