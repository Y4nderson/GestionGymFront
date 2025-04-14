import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoMembresiaService } from '../../../services/tipo-membresia.service';
import { TipoMembresiaResponse } from '../../../interfaces/tipoMembresia.interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-tipo-membresia',
  templateUrl: './registrar-tipo-membresia.component.html',
  styleUrl: './registrar-tipo-membresia.component.css'
})
export class RegistrarTipoMembresiaComponent {

tipoMembresiaForm:FormGroup
  constructor(private ruta: Router,private tipoMembresia:TipoMembresiaService, private fb:FormBuilder){

  this.tipoMembresiaForm = this.fb.group({

    proceso:[1,Validators.required],
    tipoDeMembresiaID:[0,Validators.required],
    nombre:['',Validators.required],
    precio:[0,Validators.required],
    estado:[0,Validators.required],
    duracion:[0,Validators.required],


  })

  }




  PlanMembresia(){
    this.ruta.navigate(['/tipoMembresia'])
  }

  CrearTipoMembresia(){

    if(this.tipoMembresiaForm.valid){

      const nuevoTipoMembresia: TipoMembresiaResponse = this.tipoMembresiaForm.value;

      this.tipoMembresia.CrearTipoMembresia(nuevoTipoMembresia).subscribe(


          response =>{
              
                        Swal.fire({
                          icon: 'success',
                          title: '¡Éxito!',
                          text: 'Plan creado correctamente',
                          confirmButtonColor: '#28a745' // verde
                        });
                        this.ruta.navigate(['/tipoMembresia']);
                      },
                      error =>{
                        Swal.fire({
                          icon: 'error',
                          title: '¡Error!',
                          text: 'Ocurrió un problema al crear el Plan',
                          confirmButtonColor: '#dc3545' // rojo
                        });
                      
              
                      }
                    )
                  }
                  else{Swal.fire({
                    icon: 'error',
                    title: '¡Error!',
                    text: 'Rellena todos los campos antes de registrar el Plan',
                    confirmButtonColor: '#dc3545' // rojo
                  });}
  }
}
