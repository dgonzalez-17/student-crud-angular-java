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
  public alumno: Alumno = this.router.getCurrentNavigation().extras.state.alumno

  materias: Materias[] = []

  constructor(private materiasService: MateriasService, private asginacionesService: AsignacionesService, private router: Router) { }

  AsignarMaterias(idAlumno: string, alumno : Alumno):void{
    this.router.navigate(['pages/alumno/asignate/' + idAlumno], {state:{id: idAlumno, alumno: alumno}});
  }

  verAsignaciones():void{
    this.materiasService.consultarAsignaciones(this.alumno.id).subscribe(materiasConsulta => {
      this.materias = materiasConsulta
      console.log(this.materias)
    });
  }
  editarMaterias(id: string, materias: Materias):void{
    this.router.navigate(['pages/materias/update/'+id], {state:{id: id, materias: materias}});
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
