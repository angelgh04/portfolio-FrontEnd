export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    colorOuter: string;
    colorInner: string;
    imagSrc: string;

    constructor(nombre:string, porcentaje: number, colorOuter: string, colorInner: string, imagSrc: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.colorOuter = colorOuter;
        this.colorInner = colorInner;
        this.imagSrc = imagSrc;
    }
}
