import { Component } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {


  page:number = 1;

  empleado: Empleado[] = [];

  constructor(private ruta:Router, private empleadoService: EmpleadoService){}

        ngOnInit(){
        this.mostrarEmpleado();
          
        }
  
  mostrarEmpleado(){


    this.empleadoService.mostrarEmpleado().subscribe(

      (Respuesta) =>{

        this.empleado= Respuesta;
      },
      (err)=>{

      }
    )
  }
  mostrarEmpleadoNombre(nombre: string) {
    this.empleadoService.mostrarEmpleadoNombre(nombre).subscribe(
        (respuesta) => {
            this.empleado = respuesta;
        },
        (error) => {
            console.log(error);
        }
    );
}

eliminarEmpleado(id: number) {
      console.log('Se llamó a eliminarEmpleado con ID:', id);
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción eliminará al Empleado.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.empleadoService.eliminarEmpleado(id).subscribe(
            (respuesta) => {
              Swal.fire('Eliminado', 'El empleado fue eliminado exitosamente.', 'success');
              this.mostrarEmpleado();
            },
            (error) => {
              Swal.fire('Error', 'Ocurrió un problema al eliminar el empleado.', 'error');
              console.log(error);
            }
          );
        } else {
          this.ruta.navigate(['/empleados']);
        }
      });
    }

  RegistrarEmpleado(){

    this.ruta.navigate(['/RegistrarEmpleado'])
  }
}
