import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AsignateComponent } from './asignate/asignate.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { ReadAsignacionComponent } from './readAsignacion/readAsignacion.component';
const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'asignate/:id',
    component: AsignateComponent
  },
  {
    path: 'read',
    component: ReadComponent
  },
  {
    path: 'readAsignacion/:id',
    component: ReadAsignacionComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
