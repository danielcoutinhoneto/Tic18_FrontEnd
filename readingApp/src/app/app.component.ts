import { Component } from '@angular/core';
import { VeiculosService } from '../business/services/veiculos.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'minhaApp';
  veiculos: any;
  tipoDeVeiculoSelecionado: any[] = [];
  veiculoSelecionado: any;
  constructor(private veiculosService: VeiculosService) {}

  ngOnInit(): void {
    this.veiculosService.getVeiculos().subscribe((data) => {
      this.veiculos = data;
    });
  }

  selecionarCategoria(categoria: any) {
    console.log('Selecionou', categoria);
    this.tipoDeVeiculoSelecionado = categoria;
    //console.log('Tipo categoria', this.tipoDeVeiculoSelecionado);
  }

  selecionarVeiculo(veiculoRecebido: any) {
    console.log('veiculoRecebido no pai', veiculoRecebido);
    this.veiculoSelecionado = veiculoRecebido;
  }
}

