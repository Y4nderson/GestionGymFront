import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { TipoMembresiaComponent } from './tipo-membresia/tipo-membresia.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PagosComponent } from './pagos/pagos.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AsistenciasComponent } from './asistencias/asistencias.component';
import { RegistrarClienteComponent } from './clientes/registrar-cliente/registrar-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarAsistenciaComponent } from './registrar-asistencia/registrar-asistencia.component';
import { BlankLayoutComponent } from '../blank-layout/blank-layout.component';
import { RegistrarPagoComponent } from './pagos/registrar-pago/registrar-pago.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegistrarEmpleadoComponent } from './empleados/registrar-empleado/registrar-empleado.component';

import { RegistrarTipoMembresiaComponent } from './tipo-membresia/registrar-tipo-membresia/registrar-tipo-membresia.component';
import { RegistrarUsuarioComponent } from './usuarios/registrar-usuario/registrar-usuario.component';
import { RegistrarAsistenciasComponent } from './asistencias/registrar-asistencias/registrar-asistencias.component';
import Swal from 'sweetalert2';


@NgModule({
  declarations: [

    DashboardComponent,
      ClientesComponent,
      MembresiaComponent,
      TipoMembresiaComponent,
      UsuariosComponent,
      EmpleadosComponent,
      PagosComponent,
      PagesComponent,
      AsistenciasComponent,
      RegistrarClienteComponent,
      RegistrarAsistenciaComponent,
      RegistrarPagoComponent,
      RegistrarEmpleadoComponent,
      RegistrarTipoMembresiaComponent,
      RegistrarUsuarioComponent,
      RegistrarAsistenciasComponent


  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,FormsModule,NgxPaginationModule, ReactiveFormsModule
    
  ]
})
export class PagesModule { }
