import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Profesor } from '../../../models/profesor.model';
import { ProfesorService } from '../../../services/profesor.service';
import { MateriasService } from '../../../services/materias.service';
import { Materias } from '../../../models/materias.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'alumn-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  alertaActiva = false;
  name: string;
  subject : string;
  materias: Materias[] = [] 
  id : string = this.router.getCurrentNavigation().extras.state.id;
  public profesor: Profesor = this.router.getCurrentNavigation().extras.state.profesor;


  constructor (private profesorService : ProfesorService, private materiasService: MateriasService,private router: Router) { 
    }
  ngOnInit(): void {;
    this.consultarMaterias()
  
  }

consultarMaterias():void{
  this.materiasService.consultarMaterias().subscribe(materiasConsulta => {
    this.materias = materiasConsulta
  });
}

editarProfesor(id: string, idMateria: string, name: string){
 if (!this.name) {
    this.name = this.profesor.name;
  } 
    let profesor : Profesor = {
      name : this.profesor.name,
    }
 
  if (!this.subject) {
    this.subject = this.profesor.subject.id
  }
this.profesorService.editarProfesor(this.profesor.id, this.subject, profesor).subscribe(data => {
  Swal.fire(
    'Actualizado!',
    'El profesor ha sido actualizado correctamente.',
    'success'
  ),
  this.router.navigate(['pages/profesor/read']);
},
error=>{
  Swal.fire({
    title: 'Error, no se pudo actualizar el profesor',
    text: error["error"]["message"],
    icon:"error",
    timer:3000
  });
  this.alertaActiva = true;
}
);

}
}