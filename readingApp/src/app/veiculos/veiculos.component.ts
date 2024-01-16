import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrl: './veiculos.component.css',
})
export class VeiculosComponent {
  @Input() veiculos: any[] = [];

  ngOnInit(): void {}
}
