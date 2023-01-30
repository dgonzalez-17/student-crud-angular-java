import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor.model';
import { ProfesorService } from '../../../services/profesor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'prof-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  profesores: Profesor[] = []

  constructor(private profesorService: ProfesorService, private router: Router) { }

  crearProfesor():void{
    this.router.navigate(['pages/profesor/create']);
  }

  consultarProfesor():void{
    this.profesorService.consultarProfesor().subscribe(profesorConsulta => {
      this.profesores = profesorConsulta
      console.log(this.profesores);
    });
  }
  editarProfesor(id: string, profesor: Profesor):void{
    this.router.navigate(['pages/profesor/update/'+id], {state:{id: id, profesor: profesor}});
  }
/*
  verAsignaciones(id: string,  alumno: Alumno):void{
    this.router.navigate(['pages/alumno/readAsignacion/'+id], {state:{id: id , alumno: alumno}});

  }
*/
  eliminarProfesor(id:string):void{
    Swal.fire({
      title: 'Está a punto de eliminar un profesor.',
      text: "¿Está seguro de que desea eliminar este profesor?",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "orange",
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed){
    this.profesorService.eliminarProfesor(id).subscribe(
      data => {
        Swal.fire(
          'Elminado!',
          'El profesor ha sido eliminado correctamente',
          'success'
        )
        this.ngOnInit();
      });
  }
})
}

  ngOnInit(): void {
    this.consultarProfesor()
  }

}
