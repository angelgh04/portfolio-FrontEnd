export class persona{
    //Con el simbolo de pregunta indicamos que id no es necesario
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    perfil: string;
    ubicacion: string;
    imagen: string;

    constructor(nombre: string, apellido: string, descripcion: string, perfil: string, ubicacion: string, imagen: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion= descripcion;
        this.perfil = perfil;
        this.ubicacion = ubicacion;
        this.imagen = imagen;
    }
}