import { Component, OnInit } from '@angular/core';
import { Banco } from 'src/app/class/banco.class';
import { DataBancoService } from 'src/app/services/data-banco/data-banco.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public banco: Banco;

  constructor() {
    this.banco = DataBancoService.obtenerObjetoBanco();
  }

  ngOnInit(): void {
  }

}
