import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Materias } from '../models/materias.model';
import { Alumno } from '../models/alumno.model';
import { environment } from '../../environments/environment';
import { debugOutputAstAsTypeScript } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AsignacionesService {


  constructor(private http: HttpClient) {
}

asignarMaterias(idAlumno: string, idMaterias: string){
  return this.http.get<Alumno>(environment.url_api_usuarios + '/asignaciones/AsigMatAlumno/' + idAlumno + '/' + idMaterias);
}

eliminarAsignacion(idAlumno: string, idMateria: string){
  return this.http.delete(environment.url_api_usuarios + '/asignaciones/DeleteMatAlumno/' + idAlumno + '/' + idMateria);
}


/*
  consultarMaterias(): Observable<Materias[]> { 
    return this.http.get<Materias[]>(environment.url_api_usuarios +'/materia/get')
  }

  consultarAsignaciones(id: string): Observable<Materias[]> {
    return this.http.get<Materias[]>(environment.url_api_usuarios +'/asignaciones/getAsigByAlumno/' +id)
  }

  crearMaterias(datos: Materias): Observable<Materias>{
    return this.http.post<Materias>(environment.url_api_usuarios +'/materia/post', datos)
  }

  eliminarMaterias(id:string){
    return this.http.delete<Materias>(environment.url_api_usuarios +'/materia/delete/'+id);
  }
  editarMaterias(id:string, candidato: Materias){
    return this.http.put<Materias>(environment.url_api_usuarios +'/materia/put/'+id, candidato);
  }*/
}
