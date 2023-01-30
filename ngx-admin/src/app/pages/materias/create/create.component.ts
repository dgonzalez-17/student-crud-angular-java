import { Component, OnInit } from '@angular/core';
import { Materias } from '../../../models/materias.model';
import { MateriasService } from '../../../services/materias.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

    credits:  string;
    title: string;


  constructor( private materiaService: MateriasService, private router: Router ) { }

  ngOnInit(): void {
  }

  crearMaterias(){
    let materias: Materias = {
      credits: this.credits,
      title: this.title
  }
  this.materiaService.crearMaterias(materias).subscribe(
    data=>{
      Swal.fire(
        'Creado!',
        'La Materia ha sido creado correctamente.',
        'success'
      )
      this.router.navigate(['pages/materias/read']);
      console.log(data)
    }
  );
}

    /*
create(nombre:string,cedula:string,resolucion:string){



  fetch("http://localhost:3000/candidato/crear",{method: "POST", body: JSON.stringify(candidato), headers: {'Content-Type': 'application/json'}})
  .then(response => response.json())
  .then(respuesta => console.log(respuesta));

}
}
**/
}