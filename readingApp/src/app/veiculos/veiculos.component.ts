import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css',
})
export class VeiculosComponent {
  @Input() veiculos: any[] = [];

  @Output() tipoDeVeiculoSelecionado = new EventEmitter<any>();

  selectVeiculo(veiculoSelecionado: any) {
    console.log('Teste veiculo selecionado', veiculoSelecionado);
    this.tipoDeVeiculoSelecionado.emit(veiculoSelecionado);
  }
}
