import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../../services/empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoResponse } from '../../../interfaces/empleado.interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrl: './registrar-empleado.component.css'
})
export class RegistrarEmpleadoComponent {

  empleadoform:FormGroup
  constructor(private ruta: Router, private empleadoService:EmpleadoService, private fb:FormBuilder){

    this.empleadoform = this.fb.group({

      proceso:[1,Validators.required],
      empleadoID:[0,Validators.required],
      nombreCompleto:['',Validators.required],
      cedula:['',Validators.required],
      telefono:['',Validators.required],
      cargo:['',Validators.required],
      horarioDeTrabajo:['',Validators.required],
      salario:[0,Validators.required],
      usuario:['',Validators.required],




    })
  }


  Empleados(){
    this.ruta.navigate(['/empleados'])
  }


  CrearEmpleado(){

  if(this.empleadoform.valid){
    const nuevoEmpleado: EmpleadoResponse = this.empleadoform.value
    this.empleadoService.CrearEmpleado(nuevoEmpleado).subscribe(

       response =>{
      
                Swal.fire({
                  icon: 'success',
                  title: '¡Éxito!',
                  text: 'Empleado creado correctamente',
                  confirmButtonColor: '#28a745' // verde
                });
                this.ruta.navigate(['/empleados']);
              },
              error =>{
                Swal.fire({
                  icon: 'error',
                  title: '¡Error!',
                  text: 'Ocurrió un problema al crear el Empleado',
                  confirmButtonColor: '#dc3545' // rojo
                });
              
      
              }
            )
          }
          else{Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Rellena todos los campos antes de registrar el Empleado',
            confirmButtonColor: '#dc3545' // rojo
          });}
  }


}
