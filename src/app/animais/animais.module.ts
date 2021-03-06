import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotoAnimaisComponent } from './grade-foto-animais/grade-foto-animais.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';

@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradeFotoAnimaisComponent,
  ],
  imports: [CommonModule, AnimaisRoutingModule, CartaoModule],
})
export class AnimaisModule {}
