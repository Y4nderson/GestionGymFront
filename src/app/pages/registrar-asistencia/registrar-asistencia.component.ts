import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar-asistencia',
  templateUrl: './registrar-asistencia.component.html',
  styleUrl: './registrar-asistencia.component.css'
})
export class RegistrarAsistenciaComponent {



   constructor() {
      console.log('RegistrarAsistenciaComponent cargado');
      
    }
    enviarFormulario(formulario: NgForm): void {
      const cedula = formulario.value.cedula; 
      console.log('Cédula ingresada:', cedula); 
  
      
  
      formulario.resetForm(); 
    }
}
