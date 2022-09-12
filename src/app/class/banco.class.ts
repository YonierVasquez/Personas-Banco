import { Persona } from "./persona.class";

export class Banco {
    private nombre: string = "";
    private personas: Array<Persona> = new Array<Persona>();

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}