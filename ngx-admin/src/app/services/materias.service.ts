import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Materias } from '../models/materias.model';
import { environment } from '../../environments/environment';
import { debugOutputAstAsTypeScript } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  @Output() disparadorEdit: EventEmitter<Materias> = new EventEmitter(); 

  constructor(private http: HttpClient) {
}
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
  }
}
