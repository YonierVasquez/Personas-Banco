import { Injectable } from '@angular/core';
import { Apartamento } from 'src/app/class/apartamento.class';
import { Banco } from 'src/app/class/banco.class';
import { Nevera } from 'src/app/class/nevera.class';
import { Persona } from 'src/app/class/persona.class';
import { Pertenencia } from 'src/app/class/pertenencia.class';
import { Televisor } from 'src/app/class/televisor.class';

@Injectable({
  providedIn: 'root'
})
export class DataBancoService {

  constructor() { }

  public static obtenerObjetoBanco(): Banco {
    // BANCO DE PRUEBA
    let banco: Banco = new Banco("Bancolombia");

    // dos personas
    let persona1: Persona = new Persona("Juan", "1234567890");
    let persona2: Persona = new Persona("Maria", "0987654321");

    // cuatro propiedades (apartamento, tv, nevera, apartamento)
    let propiedad1: Pertenencia = new Apartamento("Palo alto", "Calle 123", "01-01-2022", 150000000);
    let propiedad2: Pertenencia = new Televisor("Sony", 100, "Android", "01-01-2022", 1900000);
    let propiedad3: Pertenencia = new Nevera("LG", 100, false, "01-01-2022", 1500000);
    let propiedad4: Pertenencia = new Apartamento("San Diego piso 3", "Calle 123", "01-01-2022", 150000000);

    // agregar propiedades a las personas
    persona1.agregarPertenencia(propiedad1);
    persona1.agregarPertenencia(propiedad2);
    persona2.agregarPertenencia(propiedad3);
    persona2.agregarPertenencia(propiedad4);

    // agregar personas al banco
    banco.agregarPersona(persona1);
    banco.agregarPersona(persona2);

    return banco;

    // obtener el objeto banco del localStorage
    // let contenidoBanco = localStorage.getItem("banco");
    // if (contenidoBanco == null) {
    //   let banco: Banco = new Banco("Bancolombia");
    //   localStorage.setItem("banco", JSON.stringify(banco));
    //   return banco;
    // } else {
    //   let banco: Banco = JSON.parse(contenidoBanco);
    //   return banco;
    // }

  }

  static guardarPersona(persona: Persona) {
    // let banco: Banco = DataBancoService.obtenerObjetoBanco();
    // banco.agregarPersona(persona);

    // // guardar en el localStorage
    // localStorage.setItem("banco", JSON.stringify(banco));
  }


}
