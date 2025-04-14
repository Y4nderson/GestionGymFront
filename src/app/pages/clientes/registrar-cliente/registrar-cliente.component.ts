import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteResponse } from '../../../interfaces/cliente.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.css'
})
export class RegistrarClienteComponent {
  
  clienteForm:FormGroup;

  constructor(private ruta:Router, private clienteService:ClienteService, private fb:FormBuilder){



    this.clienteForm = this.fb.group({


      proceso:[1,Validators.required],
      clienteID:[0,Validators.required],
      nombreCompleto:['',Validators.required],
      cedula:['',Validators.required],
      telefono:['',Validators.required],
      correo:['',Validators.required],
      


    });



  }




  Clientes(){


    this.ruta.navigate(['/clientes'])
  }


  CrearCliente(){


    console.log('Entra al metodo');
    console.log(this.clienteForm.value);
    
    if(this.clienteForm.valid){
      console.log('entra al if');

      const nuevoCliente: ClienteResponse = this.clienteForm.value;
      this.clienteService.CrearCliente(nuevoCliente).subscribe(

        response =>{

          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Cliente creado correctamente',
            confirmButtonColor: '#28a745' // verde
          });
          this.ruta.navigate(['/clientes']);
        },
        error =>{
          Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Ocurrió un problema al crear el cliente',
            confirmButtonColor: '#dc3545' // rojo
          });
        

        }
      )
    }
    else{Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: 'Rellena todos los campos antes de registrar el Cliente',
      confirmButtonColor: '#dc3545' // rojo
    });}


  }
}
