/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor() { }
}
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Alumno } from '../models/alumno.model';
@Injectable({
providedIn: 'root'
})
export class AlumnoService {


  constructor(private http: HttpClient) {
  
  }


crearAlumno(datos: Alumno): Observable<Alumno>{
  return this.http.post<Alumno>(environment.url_api_usuarios +'/alumno/post/', datos)
}

consultarAlumno() : Observable<Alumno[]> {
  return this.http.get<Alumno[]>(environment.url_api_usuarios +'/alumno/get')
}

eliminarAlumno(id:string){
  return this.http.delete<Alumno>(environment.url_api_usuarios +'/alumno/delete/'+id)
}

editarAlumno(id:string, alumno: Alumno){
  return this.http.put<Alumno>(environment.url_api_usuarios +'/alumno/put/'+id, alumno)
}

}
