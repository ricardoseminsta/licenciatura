import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule],
})
export class Tab3Page {
  data: Date = new Date();
  dia: number = this.data.getDate();
  mes: number = this.data.getMonth();
  ano: number = this.data.getFullYear();
  hora: number = this.data.getHours();
  minutos: number = this.data.getMinutes();
  meses: Array<string> = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  dataMontada = `${this.dia} de ${this.meses[this.mes]} de ${this.ano}`;
  horaMontada:string  = this.montarHora(this.hora, this.minutos);
  constructor() {}

  montarHora(hora: number, minutos: number): string {
    hora < 9 ? "0" + hora : hora;
    minutos < 9 ? "0" + minutos : minutos;

    return `${hora} horas e ${minutos} minutos`;
  }
}
