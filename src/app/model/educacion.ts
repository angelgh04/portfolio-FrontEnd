export class Educacion {
    id: number;
    tituloE: string;
    institutoE: string;
    lugarE: string;
    fechaE: string;

    constructor(tituloE: string, institutoE: string, lugarE: string, fechaE: string){
        this.tituloE = tituloE;
        this.institutoE = institutoE;
        this.lugarE = lugarE;
        this.fechaE = fechaE;
    }
    
}
