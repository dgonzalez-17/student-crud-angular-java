import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Materias } from '../../../models/materias.model';
import { MateriasService } from '../../../services/materias.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'ngx-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup;
  alertaActiva = false;
  public materia: Materias = this.router.getCurrentNavigation().extras.state.materias


  constructor (private materiasService: MateriasService, private router: Router) { 
    }

  ngOnInit(): void {
    this.initForm();
  
  }
initForm() {
  this.updateForm = new FormGroup({
    id: new FormControl(this.materia.id),
    credits: new FormControl(this.materia.credits,Validators.compose([Validators.required, Validators.minLength(5)])),
    title: new FormControl(this.materia.title,Validators.compose([Validators.required, Validators.minLength(2)])),
  });
}

editarMaterias(){
  let materias : Materias = this.updateForm.value
this.materiasService.editarMaterias(this.materia.id, materias).subscribe(data => {
  Swal.fire(
    'Actualizada!',
    'La materia ha sido actualizada correctamente.',
    'success'
  ),
  this.router.navigate(['pages/materias/read']);
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