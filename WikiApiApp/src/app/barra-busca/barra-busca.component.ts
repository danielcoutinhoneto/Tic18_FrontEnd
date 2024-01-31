// barra-busca.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { WikipediaService } from '../../business/services/wikipedia.services';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrls: ['./barra-busca.component.css'],
})
export class BarraBuscaComponent {
  @Output() resultadosAtualizados = new EventEmitter<string[]>();

  constructor(private wikipediaService: WikipediaService) {}

  enviarBusca(termo: string) {
    this.wikipediaService
      .getResultadosPesquisa(termo)
      .pipe()
      .subscribe((resultados: any) => {
        const artigosEncontrados = resultados.query.search.map(
          (artigo: any) => artigo.title
        );
        this.resultadosAtualizados.emit(artigosEncontrados);
        console.log("Pesquisa", artigosEncontrados)
      });
  }
}
