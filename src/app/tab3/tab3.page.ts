import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  abrirUrl(url: string){
    window.open(url, '_blank').focus();
  }

  enviar(){
    let nome = this.form.get('nome').value;
    let endereco = this.form.get('endereco').value;
    console.log(nome);

    // eslint-disable-next-line max-len
    this.abrirUrl(`https://api.whatsapp.com/send?phone=555194904309&text=Ola%20me%20chamo%20${nome}%20moro%20em%20${endereco}%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes`);
  }
}
