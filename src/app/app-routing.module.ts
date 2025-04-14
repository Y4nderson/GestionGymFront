import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { MembresiaComponent } from './pages/membresia/membresia.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { TipoMembresiaComponent } from './pages/tipo-membresia/tipo-membresia.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PagesComponent } from './pages/pages.component';

import { AsistenciasComponent } from './pages/asistencias/asistencias.component';
import { authGuard } from './services/auth.guard';
import { RegistrarClienteComponent } from './pages/clientes/registrar-cliente/registrar-cliente.component';
import { RegistrarAsistenciaComponent } from './pages/registrar-asistencia/registrar-asistencia.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RegistrarPagoComponent } from './pages/pagos/registrar-pago/registrar-pago.component';
import { RegistrarEmpleadoComponent } from './pages/empleados/registrar-empleado/registrar-empleado.component';
import { RegistrarTipoMembresiaComponent } from './pages/tipo-membresia/registrar-tipo-membresia/registrar-tipo-membresia.component';
import { RegistrarUsuarioComponent } from './pages/usuarios/registrar-usuario/registrar-usuario.component';
import { RegistrarAsistenciasComponent } from './pages/asistencias/registrar-asistencias/registrar-asistencias.component';

const routes: Routes = [



{path:'',component:PagesComponent,canActivate:[authGuard], children:[



  {path: 'dashboard', component:DashboardComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'membresia', component:MembresiaComponent},
  {path: 'pagos', component:PagosComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'tipoMembresia', component:TipoMembresiaComponent},
  {path: 'asistencias', component:AsistenciasComponent},
  
  

  {path: '', redirectTo: '/clientes', pathMatch: 'full'},

  
]},
{
  path: 'registrarAsistencias',
  component: RegistrarAsistenciasComponent,
  canActivate: [authGuard],
  data: { isPopup: true } // Marca como ventana emergente
},
{path: 'registrarCliente', component:RegistrarClienteComponent},
{path: 'RegistrarPago', component:RegistrarPagoComponent},
{path: 'RegistrarEmpleado', component:RegistrarEmpleadoComponent},
{path: 'RegistrarTipoMembresia', component:RegistrarTipoMembresiaComponent},
{path: 'RegistrarUsuario', component:RegistrarUsuarioComponent},
{path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},









{path: '**', component:NopagefoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
