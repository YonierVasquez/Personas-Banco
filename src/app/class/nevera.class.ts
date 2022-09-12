import { DispositivoElectronico } from "./dispositivo-electronico.class";

export class Nevera extends DispositivoElectronico {
    private esDoblePuerta: boolean;

    constructor(marca: string, consumoWatts: number, esDoblePuerta: boolean, fechaAdquisicion: string, valor: number) {
        super(marca, consumoWatts, fechaAdquisicion, valor);
        this.esDoblePuerta = esDoblePuerta;
    }
}