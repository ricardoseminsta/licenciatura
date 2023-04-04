import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})
export class Tab2Page {

  senha='2023'
  senhaDigitada:string = '';
  botao = true;

  adicionarDigito(num: number){
    this.senhaDigitada += num;
    this.verificarSenha();
  }
  constructor() {}

  limpar(){
    this.senhaDigitada ="";
    this.verificarSenha();
  }

  private verificarSenha(){
    if(this.senhaDigitada == this.senha) this.botao=false;
    else this.botao=true;
  }

}
