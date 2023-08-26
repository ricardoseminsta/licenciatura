import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-aula-for',
  templateUrl: './aula-for.page.html',
  styleUrls: ['./aula-for.page.scss'],
})
export class AulaForPage implements OnInit {

  alunos:string[] = [];
  aluno:string = "";
  mensagem:string = '';
  medias:number[] = [];
  media:number | string = "";


  constructor(public storage: Storage) {
    //this.carregaAlunos();
    this.init();
    this.carregar();

   }

   async init(){
     this.storage = await this.storage.create();
   }

  cadastraAluno(aluno: any, media: any ){
    this.alunos.push(aluno)
    this.medias.push(media)
    this.aluno = ""
    this.media = ""
    console.log("TAMANHO DOS ALUNOS", this.alunos.length);
    this.salvar();


  }


  apagarTudo(){
    this.alunos = [];
    this.medias = [];
    this.salvar();
  }


  apagar(indice: any) {
    this.alunos.splice(indice, 1);
    this.salvar();
  }

  private salvar(){
    this.storage.set('alunos', this.alunos);
    this.storage.set('medias', this.medias);
  }

  private carregar(){
    this.storage.get('alunos').then((value: any) => {
      if(value !== null) {
        this.alunos = value;
      } else {
        this.alunos = [];
      }
    });
    this.storage.get('medias').then((value: any) => {
      if(value !== null) {
        this.medias = value;
      } else {
        this.medias = [];
      }
    });
  }


  ngOnInit() {
  }

}

