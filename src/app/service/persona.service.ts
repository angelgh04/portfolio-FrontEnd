import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL='http://localhost:8080/personas/';
  URL= environment.URL + 'personas/';

  constructor(private http: HttpClient) { }

  //Observable es para hacer peticiones asincronas. 
  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
    console.log("El servicio Portfolio está corriendo");
  }
}
