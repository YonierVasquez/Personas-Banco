export abstract class Pertenencia {
    protected fechaAdquisicion: string;
    protected valor: number;

    constructor(fechaAdquisicion: string, valor: number) {
        this.fechaAdquisicion = fechaAdquisicion;
        this.valor = valor;
    }
}