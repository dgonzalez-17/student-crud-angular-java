import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsignacionesService } from '../../../services/asignaciones.service';
import { MateriasService } from '../../../services/materias.service';
import { Materias } from '../../../models/materias.model';

@Component({
  selector: 'alumn-asignate',
  templateUrl: './asignate.component.html',
  styleUrls: ['./asignate.component.scss']
})
export class AsignateComponent implements OnInit {
    isReadOnly = true;
    name:  string;
    document: string;
    birthday: string;
    career: string;
    materia: string;
  alertaActiva = false;
  materias: Materias[] = []
  public id: string = this.router.getCurrentNavigation().extras.state.id
  public alumno: Alumno = this.router.getCurrentNavigation().extras.state.alumno


  constructor( private asginacionesService: AsignacionesService, private materiasService: MateriasService, private router: Router ) { }
  
  consultarMaterias():void{
    this.materiasService.consultarMaterias().subscribe(materiasConsulta => {
      this.materias = materiasConsulta
      console.log(this.materias)
    });
  }
  

  asignarMateria(alumnoId: string, materiaElegida: string){
  this.asginacionesService.asignarMaterias(alumnoId, materiaElegida).subscribe(data => {
    Swal.fire(
      'Asignada!',
      'La materia ha sido asignada correctamente.',
      'success'
    ),
    this.router.navigate(['pages/alumno/readAsignacion/'+ this.alumno.id, {state:{id: this.alumno.id}}]);
    console.log(this.alumno.id);
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

