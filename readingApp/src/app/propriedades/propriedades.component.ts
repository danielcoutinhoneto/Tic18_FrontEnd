import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrl: './propriedades.component.css',

})
export class PropriedadesComponent {
  @Input() veiculoSelecionada: any

  @Output() propriedadeSelecionada = new EventEmitter<any>();

  selectVeiculo(veiculoSelecionada: any) {
    console.log('Teste da caracteristica do veiculo selecionado', veiculoSelecionada);
    this.propriedadeSelecionada.emit(veiculoSelecionada);
  }

  obterChaves(): string[] {
    return Object.keys(this.veiculoSelecionada);
  }
}
