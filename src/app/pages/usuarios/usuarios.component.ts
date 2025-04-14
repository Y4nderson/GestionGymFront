import { Component } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
constructor(private UsuarioService:UsuarioService, private ruta:Router){}
page:number= 1;
  
  usuarios: Usuario [] = [];
ngOnInit(){

  this.mostrarUsuario();
}
mostrarUsuario(){
  
    
    this.UsuarioService.mostrarUsuario().subscribe(

      (response)=>{

        this.usuarios = response;
      },
      (error)=>{

        console.log(Error)
      }
    )
  };

  eliminarUsuario(id: number) {
      
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Esta acción eliminará al Usuario.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.UsuarioService.eliminarUsuario(id).subscribe(
              (respuesta) => {
                Swal.fire('Eliminado', 'El Usuario fue eliminado exitosamente.', 'success');
                this.mostrarUsuario();
              },
              (error) => {
                Swal.fire('Error', 'Ocurrió un problema al eliminar el Usuario.', 'error');
                console.log(error);
              }
            );
          } else {
            this.ruta.navigate(['/usuarios']);
          }
        });
      }
  RegistrarUsuario(){
    this.ruta.navigate(['/RegistrarUsuario'])
  }
}
