import { Component, OnInit } from '@angular/core';

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


  constructor() {
    //this.carregaAlunos();


   }


  cadastraAluno(aluno: any, media: any ){
    this.alunos.push(aluno)
    this.medias.push(media)
    this.aluno = ""
    this.media = ""
    console.log("TAMANHO DOS ALUNOS", this.alunos.length);

  }



  apagar(indice: any) {
    this.alunos.splice(indice, 1);
  }

  ngOnInit() {
  }

}

