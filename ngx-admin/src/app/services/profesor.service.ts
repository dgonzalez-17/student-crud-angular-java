import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Profesor } from '../models/profesor.model';
@Injectable({
providedIn: 'root'
})
export class ProfesorService {


  constructor(private http: HttpClient) {
  
  }


crearProfesor( idMateria: string, datos: Profesor): Observable<Profesor>{
  return this.http.post<Profesor>(environment.url_api_usuarios +'/profesor/post/'+ idMateria, datos)
}

consultarProfesor() : Observable<Profesor[]> {
  return this.http.get<Profesor[]>(environment.url_api_usuarios +'/profesor/get')
}

eliminarProfesor(id:string){
  return this.http.delete<Profesor>(environment.url_api_usuarios +'/profesor/delete/'+id)
}

editarProfesor(id:string, idMateria: string, profesor: Profesor){
  return this.http.put<Profesor>(environment.url_api_usuarios +'/profesor/put/'+id + '/' + idMateria, profesor)
}

}
