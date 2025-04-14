import { Component } from '@angular/core';
import { AsistenciaService } from '../../../services/asistencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarAsistencia } from '../../../interfaces/registrarAsistencia.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Asistencia2 } from '../../../interfaces/asistencia.interface';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-registrar-asistencias',
  templateUrl: './registrar-asistencias.component.html',
  styleUrl: './registrar-asistencias.component.css'
})
export class RegistrarAsistenciasComponent {

  registroGroup:FormGroup
  constructor(private ruta:Router,private RegistrarAsistenciaService:AsistenciaService, private fb: FormBuilder){

    this.registroGroup = this.fb.group({

      proceso:[1],
      cedula:['',Validators.required]

    });
    
  }
  cliente:any = []



  
  Buscar(cedula: string) {

    this.RegistrarAsistenciaService.mostrarAsistenciaPorBusqueda(cedula).subscribe(
      (respuesta) => {
        this.cliente = respuesta;
        console.log()
      },
      (error) => {
        console.log(error);
      }
    );

  }

  RegistrarAsistencia() {
    if (this.registroGroup.valid) {
      const nuevaRegistroAsis: RegistrarAsistencia = this.registroGroup.value;
      const cedula = nuevaRegistroAsis.cedula;
  
      this.RegistrarAsistenciaService.RegistrarAsistencia(nuevaRegistroAsis).subscribe(
        response => {
          this.RegistrarAsistenciaService.mostrarAsistenciaPorBusqueda(cedula).subscribe(
            (respuesta: Asistencia2[]) => {
              const datos = respuesta[0]; 
              const nombreCompleto = datos.nombreCompleto || 'Cliente';
              const fechaDeVencimiento = datos.fechaDeVencimiento 
                ? new Date(datos.fechaDeVencimiento).toLocaleString('es-CR', { 
                    day: '2-digit', 
                    month: '2-digit', 
                    year: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  }) 
                : 'N/A';
  
              const dias_restantes = datos.dias_restantes || 0;
  
              Swal.fire({
                icon: 'success',
                title: `¡Bienvenido, ${nombreCompleto}!`,
                html: `
                  <p><b>Fecha de Vencimiento:</b> ${fechaDeVencimiento}</p>
                  <p><b>Días restantes de membresía:</b> ${dias_restantes}</p>
                `,
                timer: 10000,
                timerProgressBar: true,
                confirmButtonColor: '#28a745'
              });
  
              // Reinicia el formulario con valores por defecto
              this.registroGroup.reset({
                proceso: 1,
                cedula: ''
              });
            },
            error => {
              Swal.fire({
                icon: 'warning',
                title: 'Asistencia registrada',
                text: 'Pero no se pudo obtener información del cliente',
                confirmButtonColor: '#ffc107'
              });
              this.registroGroup.reset({
                proceso: 1,
                cedula: ''
              });
            }
          );
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Cliente con esa cedula no existe',
            confirmButtonColor: '#dc3545',
            timer: 4000
          });
          this.registroGroup.reset({
            proceso: 1,
            cedula: ''
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Rellena todos los campos antes de registrar asistencia',
        confirmButtonColor: '#dc3545',
        timer: 4000
      });
    }
  }
  


}
