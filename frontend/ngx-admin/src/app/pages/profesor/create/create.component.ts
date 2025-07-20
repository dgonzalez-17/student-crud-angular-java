import { Component, OnInit, ViewChild } from '@angular/core';
import { Profesor } from '../../../models/profesor.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsignacionesService } from '../../../services/asignaciones.service';
import { ProfesorService } from '../../../services/profesor.service';
import { MateriasService } from '../../../services/materias.service';
import { Materias } from '../../../models/materias.model';

@Component({
  selector: 'prof-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    isReadOnly = true;
    name:  string;
    materia: string;
  alertaActiva = false;
  materias: Materias[] = []


  constructor( private profesorService: ProfesorService, private materiasService: MateriasService, private router: Router ) { }
  
  consultarMaterias():void{
    this.materiasService.consultarMaterias().subscribe(materiasConsulta => {
      this.materias = materiasConsulta
      console.log(this.materias)
    });
  }
  

  crearProfesor( materia: string, name: string){
    let profesor: Profesor = {
      name: this.name
  }
  this.profesorService.crearProfesor(this.materia, profesor ).subscribe(data => {
    Swal.fire(
      'Creado!',
      'El profesor ha sido creado correctamente.',
      'success'
    ),
    this.router.navigate(['pages/profesor/read/']);
  },
  error=>{
    Swal.fire({
      title: 'Error, no se pudo asignar la materia',
      text: error["error"]["message"],
      icon:"error",
      timer:3000
    });
    this.alertaActiva = true;
  }
  );
  
  }

  ngOnInit(): void {
    this.consultarMaterias()
  }

}

