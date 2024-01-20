import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculosService } from '../business/services/veiculos.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PropriedadesComponent } from './propriedades/propriedades.component';

@NgModule({
  declarations: [AppComponent, CategoriasComponent, VeiculosComponent, PropriedadesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
