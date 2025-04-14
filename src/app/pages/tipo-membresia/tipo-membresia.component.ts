import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TipoMembresia } from '../../interfaces/tipoMembresia.interface';
import { TipoMembresiaService } from '../../services/tipo-membresia.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-membresia',
  templateUrl: './tipo-membresia.component.html',
  styleUrl: './tipo-membresia.component.css'
})
export class TipoMembresiaComponent {

constructor(private tipoMembresiaService:TipoMembresiaService, private ruta:Router){}
page:number= 1;
  
  tipoMembresias: TipoMembresia [] = [];
ngOnInit(){

  this.mostrarTipoMembresia();
}
  mostrarTipoMembresia(){
  
    
    this.tipoMembresiaService.mostrarTipoMembresia().subscribe(

      (response)=>{

        this.tipoMembresias = response;
      },
      (error)=>{

        console.log(Error)
      }
    )
  };


  eliminarTipoMembresia(id: number) {
      
        Swal.fire({
          title: '¿Estás seguro?',
          text: 'Esta acción eliminará al Tipo de Membresia.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.tipoMembresiaService.eliminarTipoMembresia(id).subscribe(
              (respuesta) => {
                Swal.fire('Eliminado', 'El Tipo de Membresia fue eliminado exitosamente.', 'success');
                this.mostrarTipoMembresia();
              },
              (error) => {
                Swal.fire('Error', 'Ocurrió un problema al eliminar el Tipo de Membresia.', 'error');
                console.log(error);
              }
            );
          } else {
            this.ruta.navigate(['/tipoMembresia']);
          }
        });
      }

  RegistrarTipoMembresia(){
    this.ruta.navigate(['/RegistrarTipoMembresia'])
  }
  
    
}
