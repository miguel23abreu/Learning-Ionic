import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  doarAlimentos(){
    this.abrirUrl('https://www.google.com/maps/search/Pontos+de+Doa%C3%A7%C3%A3o+Alimento');
  }; // a função focus faz com que quando a função for acionada, o usuário seja direcionado para a url requisitada

  doarRoupas(){
    this.abrirUrl('https://www.google.com/maps/search/Doar+Roupa/@-8.8795209,-48.5384205,5z');
  } 
  doarSangue(){
    this.abrirUrl('https://www.google.com/maps/search/Pontos+Doar+Sangue/@-15.9800265,-51.3238241,5z');
  }

  abrirUrl(url: string){
    window.open(url, '_blank').focus();
  }
}
