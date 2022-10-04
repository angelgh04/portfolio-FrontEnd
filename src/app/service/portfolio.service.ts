import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Los observables son una colección de futuros eventos
import { Observable } from 'rxjs';

//Permite que el servicio sea inyectado en los componentes
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  //El método get nos permitirá acceder a los recursos del servidor con el Método obtenerDatos.
  //Primero inyectamos el módulo HttpClient
  constructor(private http:HttpClient) { }

  //Creamos el método
  obtenerDatos():Observable<any>{
    //En vez de json, iría una URL de nuestros datos.
    return this.http.get('./assets/data/data.json');
    //Mensaje para saber si está corriendo
    //console.log("El servicio Portfolio está corriendo");
  }
}

