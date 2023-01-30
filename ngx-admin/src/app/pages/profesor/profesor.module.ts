import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule, NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ProfesorRoutingModule } from './profesor-routing.module';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ReadAsignacionComponent } from '../alumno/readAsignacion/readAsignacion.component';
import { UpdateComponent } from './update/update.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatInputModule } from '@angular/material/input';
import { icon } from 'leaflet';



@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    MatInputModule
  ]
})
export class ProfesorModule { }
