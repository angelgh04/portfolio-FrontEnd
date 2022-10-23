export class persona{
    //Con el simbolo de pregunta indicamos que id no es necesario
    id?: number;
    nombre: string;
    apellido: string;
    img: string;

    constructor(nombre: string, apellido: string, img: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
    }
}