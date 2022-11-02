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
  //URL= environment.URL + 'personas/';
  URL='https://backend-ar.herokuapp.com/personas/';

  constructor(private httpClient: HttpClient) { }

  //Observable es para hacer peticiones asincronas. 
  //public getPersona(): Observable<persona>{
    //return this.http.get<persona>(this.URL+'traer/perfil');
    //console.log("El servicio Portfolio está corriendo");
  //}

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }
  /*
  public save(experiencia: Experiencia): Observable<persona>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }
  */

  /*
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
  */
}
