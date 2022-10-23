export class LoginUsuario {
    nombreUsuario: string;
    password: string;

    //GEneramos un constructor
    constructor (nombreUsuario: string, password: string){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
