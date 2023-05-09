import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataAtualFront: string = new Date().toLocaleDateString("pt-BR");
  dataAtual: string = new Date().toISOString();
  dtNascimento:string = "";
  lifeTime:string = "";
  lifeTimeDays:number = 0;
  lifeTimeMonths:number = 0;
  lifeTimeYears:number = 0;

  constructor() {}
  calcularLifeTime(){
    const dataAtualMoment = moment(this.dataAtual);
    const dataNascimentoMoment = moment(this.dtNascimento);
    this.lifeTimeDays = dataAtualMoment.diff(dataNascimentoMoment, 'days')
    this.lifeTimeMonths = dataAtualMoment.diff(dataNascimentoMoment, 'months')
    this.lifeTimeYears = dataAtualMoment.diff(dataNascimentoMoment, 'years')
    this.lifeTime = `Dias passados: ${this.lifeTimeDays}\nMeses Passados: ${this.lifeTimeMonths}\nAnos Passados: ${this.lifeTimeYears}`;


  }
}
