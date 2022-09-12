import { Persona } from "./persona.class";

export class Banco {
    private nombre: string = "";
    public personas: Array<Persona> = new Array<Persona>();

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public agregarPersona(persona: Persona): void {
        this.personas.push(persona);
    }
}