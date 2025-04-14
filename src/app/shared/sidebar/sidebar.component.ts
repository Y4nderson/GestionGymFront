import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
 styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  currentRoute: string = '';
  constructor(private rutas: Router,private Se: LoginService)
  {
    this.rutas.events.subscribe(() => {
      this.currentRoute = this.rutas.url;
    });

  }

  Clientes(){


    this.rutas.navigate(['/clientes'])
  }
  Empleados(){


    this.rutas.navigate(["/empleados"])
  }
  Membresias(){


    this.rutas.navigate(["/membresia"])
  
  }
  TipoMembresias(){


    this.rutas.navigate(["/tipoMembresia"])
  }
  Pagos(){


    this.rutas.navigate(["/pagos"])
  }

  Usuarios(){


    this.rutas.navigate(["/usuarios"])
  }

  RegistrarAsistencia() {
    // Usa el servicio para abrir la ventana
    this.Se.abrirEnNuevaPestana('/registrarAsistencias');
  }
  
  
  


  Asistencias(){


    this.rutas.navigate(["/asistencias"])
  }
  

}
