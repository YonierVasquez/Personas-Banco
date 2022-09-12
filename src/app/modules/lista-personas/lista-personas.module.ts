import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPersonasRoutingModule } from './lista-personas-routing.module';
import { PersonaComponent } from './persona/persona.component';


@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    ListaPersonasRoutingModule
  ]
})
export class ListaPersonasModule { }
