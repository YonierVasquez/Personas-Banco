import { Pertenencia } from "./pertenencia.class";

export class Persona {
    public cedula: string;
    public nombreCompleto: string;
    public pertenencias: Array<Pertenencia>;

    constructor(nombreCompleto: string, cedula: string) {
        this.cedula = cedula;
        this.nombreCompleto = nombreCompleto;
        this.pertenencias = new Array<Pertenencia>();
    }

    public agregarPertenencia(pertenencia: Pertenencia): void {
        this.pertenencias.push(pertenencia);
    }
}