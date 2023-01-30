import { Component, OnInit } from '@angular/core';
import { Materias } from '../../../models/materias.model';
import { MateriasService } from '../../../services/materias.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Alumno } from '../../../models/alumno.model';
import { AsignacionesService } from '../../../services/asignaciones.service';

@Component({
  selector: 'materias-readAsig',
  templateUrl: './readAsignacion.component.html',
  styleUrls: ['./readAsignacion.component.scss']
})
export class ReadAsignacionComponent implements OnInit {
  public id: string = this.router.getCurrentNavigation().extras.state.id
  public materia: Materias = this.router.getCurrentNavigation().extras.state.materia

  alumnos: Alumno[] = []

  constructor(private materiasService: MateriasService, private asginacionesService: AsignacionesService, private router: Router) { }

  verAsignaciones():void{
    this.asginacionesService.consultarAsignacionesMat(this.materia.id).subscribe(alumnoConsulta => {
      this.alumnos = alumnoConsulta
      console.log(this.alumnos)
    });
  }

  eliminarAsignacion(idAlumno:string, idMateria: string):void{
    Swal.fire({
      title: 'Está a punto de eliminar una Materia.',
      text: "¿Está seguro de que desea eliminar esta materia?",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "orange",
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed){
    this.asginacionesService.eliminarAsignacion(idAlumno, idMateria).subscribe(
      data => {
        Swal.fire(
          'Elminada!',
          'La materia ha sido eliminada correctamente',
          'success'
        )
        this.ngOnInit();
      });
  }
})
}

  ngOnInit(): void {
    this.verAsignaciones()
  }

}
