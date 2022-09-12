import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NuevaPersonaComponent } from './modules/dashboard/nueva-persona/nueva-persona.component';
import { MainComponent } from './modules/dashboard/main/main.component';
import { RouterModule } from '@angular/router';
import { PersonaComponent } from './modules/dashboard/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NuevaPersonaComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
