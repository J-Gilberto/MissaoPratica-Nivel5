import { Injectable, OnInit } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  public editoras: Array<Editora> = [
    new Editora(1, 'Abril Editora'),
    new Editora(2, 'Pearson Editora '),
    new Editora(3, 'Editora  Moderna'),
  ];

  constructor() {}

  public getEditoras(): Array<Editora> {
    return this.editoras;
  }

  public getNomeEditora(codEditora: number) {
    const nomeEditora = this.editoras.filter(
      (editora) => editora.codEditora === codEditora
    );
    return nomeEditora.length > 0 ? nomeEditora[0].nome : 'Desconhecida';
  }
}
