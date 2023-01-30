import { Component, OnInit } from '@angular/core';
import { Materias } from '../../../models/materias.model';
import { MateriasService } from '../../../services/materias.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  materias: Materias[] = []

  constructor(private materiasService: MateriasService, private router: Router) { }

  crearMaterias():void{
    this.router.navigate(['pages/materias/create']);
  }

  consultarMaterias():void{
    this.materiasService.consultarMaterias().subscribe(materiasConsulta => {
      this.materias = materiasConsulta
    });
  }
  editarMaterias(id: string, materias: Materias):void{
    this.router.navigate(['pages/materias/update/'+id], {state:{id: id, materias: materias}});
  }

  verAsignaciones(id: string, materia: Materias){
    this.router.navigate(['pages/materias/readAsignacion/'+id], {state:{id: id, materia: materia}});
    }

  eliminarMaterias(id:string):void{
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
    this.materiasService.eliminarMaterias(id).subscribe(
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
    this.consultarMaterias()
  }

}
