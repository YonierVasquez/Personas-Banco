import { Pertenencia } from "./pertenencia.class";

export class Apartamento extends Pertenencia{
    private nombre: string;
    private direccion: string;

    constructor(nombre: string, direccion: string, fechaAdquisicion: string, valor: number) {
        super(fechaAdquisicion, valor);
        this.nombre = nombre;
        this.direccion = direccion;
    }
}