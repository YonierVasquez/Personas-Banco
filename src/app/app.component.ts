import { Component } from '@angular/core';
import { Banco } from './class/banco.class';
import { DataBancoService } from './services/data-banco/data-banco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public banco: Banco;

  constructor() {
    this.banco = DataBancoService.obtenerObjetoBanco();
  }
}
