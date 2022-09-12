import { Pertenencia } from "./pertenencia.class";

export abstract class DispositivoElectronico extends Pertenencia{
    protected marca: string;
    protected consumoEnWatts: number;

    constructor(marca: string, consumoEnWatts: number, fechaAdquisicion: string, valor: number) {
        super(fechaAdquisicion, valor);
        this.marca = marca;
        this.consumoEnWatts = consumoEnWatts;
    }
}