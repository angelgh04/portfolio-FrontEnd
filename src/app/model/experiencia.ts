export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    lugarE: string;
    fechaE: string;

    constructor (nombreE: string, descripcionE: string, lugarE: string, fechaE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.lugarE = lugarE;
        this.fechaE = fechaE;
    }
}
