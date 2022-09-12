import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/class/persona.class';
import { DataBancoService } from 'src/app/services/data-banco/data-banco.service';
@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {

  nombreCompleto!: string;
  cedula!: string;

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  guardarPersona() {
    let nuevaPersona = new Persona(this.nombreCompleto, this.cedula);
    DataBancoService.guardarPersona(nuevaPersona);
    this.router.navigate(['']);
  }

}
