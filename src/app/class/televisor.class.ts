import { DispositivoElectronico } from "./dispositivo-electronico.class";

export class Televisor extends DispositivoElectronico {
    private versionSO: string;
    
    constructor(marca: string, consumoWatts: number, versioSO: string, fechaAdquisicion: string, valor: number) {
        super(marca, consumoWatts, fechaAdquisicion, valor);
        this.versionSO = versioSO;
    }
}