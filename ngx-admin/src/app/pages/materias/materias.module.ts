import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule, NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MateriasRoutingModule } from './materias-routing.module';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ReadAsignacionComponent } from './readAsignacion/readAsignacion.component';
import { UpdateComponent } from './update/update.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { icon } from 'leaflet';




@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent,
    ReadAsignacionComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    MatInputModule
  ],
})
export class MateriasModule { }
