import { Pertenencia } from "./pertenencia.class";

export class Persona {
    private cedula: string;
    private nombreCompleto: string;
    private pertenencias: Array<Pertenencia>;

    constructor(cedula: string, nombreCompleto: string) {
        this.cedula = cedula;
        this.nombreCompleto = nombreCompleto;
        this.pertenencias = new Array<Pertenencia>();
    }
}