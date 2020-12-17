import { Component, OnInit, Input } from '@angular/core';

enum ValidaType {
  ERROR,
  WARNING
}

interface IEntradaOptions {
  title: string;
  descricao: string;
}

interface ICampoOptions {
  tipo_erro: ValidaType;
  valida_erro: boolean;
  value: string;
  saida: string;
  onKey: (any)=>string;
  valida(): boolean;
}

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})

export class EntradaComponent implements OnInit, IEntradaOptions, ICampoOptions {
  @Input() title: string;
  @Input() descricao: string;

  tipo_erro: ValidaType  = ValidaType.ERROR;
  valida_erro: boolean;
  value: string = '';
  saida: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event) {
    return '';
  }

  valida() {
    if(this.value == ''){
      return this.valida_erro = true;
    }
  }
}
