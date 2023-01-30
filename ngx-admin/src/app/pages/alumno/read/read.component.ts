import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { AlumnoService } from '../../../services/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'alumn-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  alumnos: Alumno[] = []

  constructor(private alumnoService: AlumnoService, private router: Router) { }

  crearAlumno():void{
    this.router.navigate(['pages/alumno/create']);
  }

  consultarAlumno():void{
    this.alumnoService.consultarAlumno().subscribe(alumnoConsulta => {
      this.alumnos = alumnoConsulta
    });
  }
  editarAlumno(id: string, alumno: Alumno):void{
    this.router.navigate(['pages/alumno/update/'+id], {state:{id: id, alumno: alumno}});
  }

  verAsignaciones(id: string,  alumno: Alumno):void{
    this.router.navigate(['pages/alumno/readAsignacion/'+id], {state:{id: id , alumno: alumno}});

  }

  eliminarAlumno(id:string):void{
    Swal.fire({
      title: 'Está a punto de eliminar un alumno.',
      text: "¿Está seguro de que desea eliminar este alumno?",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "orange",
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed){
    this.alumnoService.eliminarAlumno(id).subscribe(
      data => {
        Swal.fire(
          'Elminado!',
          'El alumno ha sido eliminado correctamente',
          'success'
        )
        this.ngOnInit();
      });
  }
})
}

  ngOnInit(): void {
    this.consultarAlumno()
  }

}
