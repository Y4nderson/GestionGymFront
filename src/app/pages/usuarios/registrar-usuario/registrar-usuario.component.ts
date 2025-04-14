import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioResponse } from '../../../interfaces/usuario.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {

  usuarioForm:FormGroup
 constructor(private ruta: Router, private usuarioService:UsuarioService,private fb:FormBuilder){


  this.usuarioForm = this.fb.group({


    proceso:[1,Validators.required],
    usuarioID:[0,Validators.required],
    usuario:['',Validators.required],
    contrasenahash:['',Validators.required],
    correoElectronico:['',Validators.required],
    nombreCompleto:['',Validators.required],
    rol:['',Validators.required],
    permisos:['',Validators.required],

  })
 }

  Usuarios(){
    this.ruta.navigate(['/usuarios'])
  }

  CrearUsuario(){

    if(this.usuarioForm.valid){

      const NuevoUsuario: UsuarioResponse =this.usuarioForm.value

      this.usuarioService.CrearUsuario(NuevoUsuario).subscribe(

          response =>{
                      
                                Swal.fire({
                                  icon: 'success',
                                  title: '¡Éxito!',
                                  text: 'Usuario creado correctamente',
                                  confirmButtonColor: '#28a745' // verde
                                });
                                this.ruta.navigate(['/usuarios']);
                              },
                              error =>{
                                Swal.fire({
                                  icon: 'error',
                                  title: '¡Error!',
                                  text: 'Ocurrió un problema al crear el Usuario',
                                  confirmButtonColor: '#dc3545' // rojo
                                });
                              
                      
                              }
                            )
                          }
                          else{Swal.fire({
                            icon: 'error',
                            title: '¡Error!',
                            text: 'Rellena todos los campos antes de registrar el Usuario',
                            confirmButtonColor: '#dc3545' // rojo
                          });}
  }
}
