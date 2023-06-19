import { Component } from '@angular/core';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nomeReceita: string = "";
  valorReceita: number = 0;
  nomeDespesa: string = "";
  valorDespesa: number = 0;
  listaDescricoesGeral: string[] = [];
  listaValoresGeral: number[] = [];
  saldo = 0;

  constructor(public storage: Storage) {
    this.init();
    this.carregar();
  }


  async init() {
    this.storage = await this.storage.create();
    }

  addReceita(nome: string, valor: number){
    this.listaDescricoesGeral.push(nome);
    this.listaValoresGeral.push(valor);
    this.salvarReceita();
    this.saldo += valor;
    this.valorReceita = 0;
    this.nomeReceita = "";
  }

  addDespesa(nome: string, valor: number){
    this.listaDescricoesGeral.push(nome);
    this.listaValoresGeral.push(valor);
    this.salvarDespesa();
    this.saldo -= valor;
    this.valorDespesa = 0;
    this.nomeDespesa = "";
  }

  private salvarReceita(){
    this.storage.set('listaDescricoesGeral', this.nomeReceita);
    this.storage.set('listaValoresGeral', this.valorReceita);
  }

  private salvarDespesa(){
    this.storage.set('listaDescricoesGeral', this.nomeDespesa);
    this.storage.set('listaValoresGeral', this.valorDespesa);
  }

  private carregar(){
    this.storage.get('listaDescricoesGeral').then((value: any) => {
      if(value !== null) {
        this.listaDescricoesGeral = value;
      } else {
        this.listaDescricoesGeral = [];
      }
    });
    this.storage.get('listaValoresGeral').then((value: any) => {
      if(value !== null) {
        this.listaValoresGeral = value;
      } else {
        this.listaValoresGeral = [];
      }
    });
  }

  ngOnInit() {
  }
}
