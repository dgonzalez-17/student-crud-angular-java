import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { AlumnoService } from '../../../services/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'alumn-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    name:  string;
    document: string;
    birthday: string;
    career: string;


  constructor( private alumnoService: AlumnoService, private router: Router ) { }

  ngOnInit(): void {
  }

  crearAlumno(){
    let alumno: Alumno = {
      name: this.name,
      document: this.document,
      birthday: this.birthday,
      career: this.career
  }
  this.alumnoService.crearAlumno(alumno).subscribe(
    data=>{
      Swal.fire(
        'Creado!',
        'El Alumno ha sido creado correctamente.',
        'success'
      )
      this.router.navigate(['pages/alumno/read']);
      console.log(data)
    }
  );
}
}