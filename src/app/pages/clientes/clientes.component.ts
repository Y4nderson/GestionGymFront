import { Component } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {




  filtroBusqueda = new FormControl('');
  page: number = 1;
    clientes: Cliente[] = [];

    clientesEstadisticas: any = {
      totalClientes: 0,
      clientesActivos: 0,
      clientesInactivos: 0,
      clientesProximosVencer: 0
  };
    constructor(
      private ruta:Router,
      private clienteService: ClienteService
  
    ){ this.mostrarCliente()}

    ngOnInit() {
      this.mostrarCliente();
      this.mostrarClienteCantidad();
    }
  
  
    mostrarCliente(){
  
      this.clienteService.mostrarCliente().subscribe(
  
  
        (respuesta) =>{
  
          
          this.clientes = respuesta;
        },
        (error)=>{
  
          console.log(error)
        }
      )
    }
    
    mostrarClienteInactivos(){
  
      this.clienteService.mostrarClienteInactivos().subscribe(
  
  
        (respuesta) =>{
  
          
          this.clientes = respuesta;
        },
        (error)=>{
  
          console.log(error)
        }
      )
    }
    mostrarClienteActivos(){
  
      this.clienteService.mostrarClienteActivos().subscribe(
  
  
        (respuesta) =>{
  
          
          this.clientes = respuesta;
        },
        (error)=>{
  
          console.log(error)
        }
      )
    }

    mostrarClienteVencer(){
  
      this.clienteService.mostrarClienteVencer().subscribe(
  
  
        (respuesta) =>{
  
          
          this.clientes = respuesta;
        },
        (error)=>{
  
          console.log(error)
        }
      )
    }

    mostrarClienteCantidad(){
  
      this.clienteService.mostrarClienteCantidad().subscribe(
  
  
        (respuesta) =>{
  
          this.clientesEstadisticas = respuesta[0] || { 
            totalClientes: 0, 
            clientesActivos: 0, 
            clientesInactivos: 0, 
            clientesProximosVencer: 0 
          };
        },
        (error)=>{
  
          console.log(error)
        }
      )
    }


    
    Buscar(filtro: string) {
      this.clienteService.mostrarClienteFiltro(filtro).subscribe(
        (respuesta) => {
          this.clientes = respuesta;
        },
        (error) => {
          console.log(error);
        }
      );
    }
    prueba() {
      console.log('¡El botón de prueba funciona!');
    }
    
    
  
    eliminarCliente(id: number) {
      console.log('Se llamó a eliminarCliente con ID:', id);
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción desactivará al cliente y su membresía activa.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.clienteService.eliminarCliente(id).subscribe(
            (respuesta) => {
              Swal.fire('Eliminado', 'El cliente fue desactivado exitosamente.', 'success');
              this.mostrarCliente();
            },
            (error) => {
              Swal.fire('Error', 'Ocurrió un problema al eliminar el cliente.', 'error');
              console.log(error);
            }
          );
        } else {
          this.ruta.navigate(['/clientes']);
        }
      });
    }
    

    renovarMembresia(cedula: string) {
      this.ruta.navigate(['/RegistrarPago'], { queryParams: { cedula } });
    }
    

    RegistrarCliente(){


      this.ruta.navigate(['/registrarCliente']);
      
    }
  
   
}
