import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao2',
  templateUrl: './questao2.page.html',
  styleUrls: ['./questao2.page.scss'],
})
export class Questao2Page implements OnInit {
  salario:number | null = null;
  msgAlerta: string = "";

  calcularImpostos(){
    if(this.salario){
      if(this.salario  > 4664.68){
        this.msgAlerta = `o Seu salário está na faixa dos 27,5% de imposto, e vc terá que pagar ${this.salario * 0.275} de impostos`;
        return;
      }
      if(this.salario >= 3751.06){
        this.msgAlerta = `o Seu salário está na faixa dos 22,5% de imposto, e vc terá que pagar ${this.salario * 0.225} de impostos`;
        return;
      }
      if(this.salario >= 2826.66){
        this.msgAlerta = `o Seu salário está na faixa dos 15% de imposto, e vc terá que pagar ${this.salario * 0.15} de impostos`;
        return;
      }
      if(this.salario >= 2112.01){
        this.msgAlerta = `o Seu salário está na faixa dos 7,5% de imposto, e vc terá que pagar ${this.salario * 0.075} de impostos`;
        return;
      }
      this.msgAlerta = `o Seu salário está ISENTO de imposto`
    }
    
    
  }
  constructor() { }

  ngOnInit() {
  }

}
