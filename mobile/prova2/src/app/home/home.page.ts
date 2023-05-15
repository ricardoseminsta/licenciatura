import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome:string ="";
  dtNascimento:string = new Date().toISOString();
  msgBoasVindas:string = "";

  mostrarMsgBoasVindas(){
    const dataNascimentoMoment = moment(this.dtNascimento);
    const dataAtual =  moment(new Date());
    const idade = dataAtual.diff(dataNascimentoMoment, "days");
    this.msgBoasVindas = idade.toString();
    //18 anos são 6574 dias
    if(this.nome === "") {
      this.msgBoasVindas = `Digite um nome válido`;
      return;
    }
    if(idade < 0) {
      this.msgBoasVindas = `Digite um idade Válida`;
      return;
    }
    
    if(idade < 6574){
      this.msgBoasVindas = `O usuario ${this.nome} ainda não completou 18 Anos!!`;
      return;
    }
    if(idade >= 6574) {
      this.msgBoasVindas = `Seja bem vindo ${this.nome} de acordo com os nossos calculos você já é maior de idade. Receba essa Cerveja 🍺`;
      return;
    }
  }
  
  constructor() {}

}
