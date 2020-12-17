import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {
  @Input() title: string;
  @Input() descricao: string;
  msg_erro: string;
  value: string = '';
  saida: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // ao clicar no input a variável 'value' recebe o valor do input
  onKey(event: any){
    this.value = event.target.value;

    if(this.title === 'telefone') {
      if(this.value.length === 1) {
        this.saida = '(' + this.value;
      }
      if(this.value.length === 3) {
        this.saida = this.value + ') ';
      }
      if(this.value.length === 6) {
        this.saida = this.value + ' ';
      }
      if(this.value.length === 11) {
        this.saida = this.value + '-';
      }
      if(this.value.length >= 17) {
        return this.msg_erro = `${this.title} tamanho do telefone incorreto.`;
      }else {
        return this.msg_erro = '';
      }
    }
  }

  // ao desfocar o input, é feita a verificação se está vazio ou se possui mais de vinte caracteres
  valida() {
    if(this.title === 'nome') {
      if(this.value.length >= 20){
        return this.msg_erro = `${this.title} deve ter menos de vinte caracteres.`;
      }
    }
    if(this.value === '') {
      return this.msg_erro = `${this.title} não deve estar vazio.`;
    }

    return this.msg_erro = '';
  }
}
