import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { AlumnoService } from '../../../services/alumno.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'alumn-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  alertaActiva = false;
  public alumno: Alumno = this.router.getCurrentNavigation().extras.state.alumno


  constructor (private alumnoService : AlumnoService, private router: Router) { 
    }

  ngOnInit(): void {
    this.initForm();
  
  }
initForm() {
  this.updateForm = new FormGroup({
    id: new FormControl(this.alumno.id),
    name: new FormControl(this.alumno.name,Validators.compose([Validators.required, Validators.minLength(5)])),
    document: new FormControl(this.alumno.document,Validators.compose([Validators.required, Validators.minLength(2)])),
    birthday: new FormControl(this.alumno.birthday,Validators.compose([Validators.required, Validators.minLength(2)])),
    career: new FormControl(this.alumno.career,Validators.compose([Validators.required, Validators.minLength(2)])),
  });
}

editarAlumno(){
  let alumno : Alumno = this.updateForm.value
this.alumnoService.editarAlumno(this.alumno.id, alumno).subscribe(data => {
  Swal.fire(
    'Actualizado!',
    'La alumno ha sido actualizado correctamente.',
    'success'
  ),
  this.router.navigate(['pages/alumno/read']);
},
error=>{
  Swal.fire({
    title: 'Error, no se pudo actualizar la materia',
    text: error["error"]["message"],
    icon:"error",
    timer:3000
  });
  this.alertaActiva = true;
}
);

}
}