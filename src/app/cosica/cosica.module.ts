import { RedefineModule } from '../redefine/redefine.module';
import { AsoladoComponent } from './../asolado/asolado.component';
import { PrimoComponent } from './primo/primo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FondoComponent } from './fondo/fondo.component';

@NgModule({
  declarations: [PrimoComponent, FondoComponent],
  imports: [
    CommonModule
    , RedefineModule
  ],
  exports: [
    PrimoComponent, FondoComponent
  ]  
})
export class CosicaModule { }
