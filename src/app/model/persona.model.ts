export class persona{
    //Con el simbolo de pregunta indicamos que id no es necesario
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
    }
}