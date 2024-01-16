import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  @Input() categorias: any;
  @Output() categoriaSelecionada = new EventEmitter<any[]>();

  selectCategoria(categoriaSelecionada: any[]){
    this.categoriaSelecionada.emit(categoriaSelecionada);
  }
}
