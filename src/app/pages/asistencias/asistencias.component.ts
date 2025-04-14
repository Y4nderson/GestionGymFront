import { Component } from '@angular/core';
import { AsistenciaService } from '../../services/asistencia.service';
import { Asistencia } from '../../interfaces/asistencia.interface';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrl: './asistencias.component.css'
})
export class AsistenciasComponent {


page: number=1;
  asistencia: Asistencia[] = [];

  constructor(
    private rutas:Router,
    private asistenciaService: AsistenciaService,
    private Se: LoginService


  ){ this.mostrarAsistencia()}

  mostrarAsistencia(){

    this.asistenciaService.mostrarAsistencia().subscribe(


      (respuesta) =>{

        
        this.asistencia = respuesta;
      },
      (error)=>{

        console.log(error)
      }
    )
  }

 
  RegistrarAsistencia() {
    // Usa el servicio para abrir la ventana
    this.Se.abrirEnNuevaPestana('/registrarAsistencias');
  }
 
  mostrarAsistenciaNombre(nombre: string) {
    this.asistenciaService.mostrarAsistenciaNombre(nombre).subscribe(
      (response) => {
        this.asistencia = response; // si es un array, asegúrate de que this.asistencia sea un array también
      },
      (err) => {
        console.log(err); // corregido
      }
    );
  }
  


}
