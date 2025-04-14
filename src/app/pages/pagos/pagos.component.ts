import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagoService } from '../../services/pago.service';
import { Pago } from '../../interfaces/pago.interface';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {


  page: number = 1;


  pagosEstadisticas: any = {
    totalPagos: 0,
    totalPagosAnio: 0,
    totalPagosMes: 0,
    totalPagosSemana: 0
};



  fechaInicio: string = ''; 
  fechaFin: string = ''; 
  
  pagos: Pago[] = [];


      constructor(
            private ruta:Router,
            private PagoService: PagoService
        
          ){}
      
          ngOnInit() {
            this.mostrarPago();
            this.mostrarPagosCantidad();
          }



        mostrarPago(){
          
          this.PagoService.mostrarPago().subscribe(


            (respuesta) =>{

              
              this.pagos = respuesta;
            },
            (error)=>{

              console.log(error)
            }
          )
        }

        mostrarAntiguos(){
          console.log('Llamando a mostrarPagoantiguo');
          this.PagoService.mostrarAntiguos().subscribe(


            (respuesta) =>{

              
              this.pagos = respuesta;
            },
            (error)=>{

              console.log(error)
            }
          )
        }

        mostrarPagosMembresia(membresia: string) {
          this.PagoService.mostrarPagosMembresia(membresia).subscribe(
              (respuesta) => {
                  this.pagos = respuesta;
              },
              (error) => {
                  console.log(error);
              }
          );
      }



      mostrarPagosCantidad(){
  
        this.PagoService.mostrarPagosCantidad().subscribe(
    
    
          (respuesta) =>{
    
            this.pagosEstadisticas = respuesta[0] || { 
              totalPagos: 0,
            totalPagosAnio: 0,
            totalPagosMes: 0,
            totalPagosSemana: 0 
            };
          },
          (error)=>{
    
            console.log(error)
          }
        )
      }
      

      mostrarPagosCedula(cedula: string) {
        this.PagoService.mostrarPagosCedula(cedula).subscribe(
            (respuesta) => {
                this.pagos = respuesta;
            },
            (error) => {
                console.log(error);
            }
        );
    }

        buscarPagosPorFechas() {
          if (!this.fechaInicio || !this.fechaFin) {
            console.error('Debes seleccionar ambas fechas');
            return;
          }
      
          const filtro = `fechaInicio=${this.fechaInicio}&fechaFin=${this.fechaFin}`;
          this.PagoService.mostrarPagosPorRango(filtro).subscribe(
            (respuesta) => {
              this.pagos = respuesta;
            },
            (error) => {
              console.log(error);
            }
          );
        }
        
        RegistrarPago(){


          this.ruta.navigate(['/RegistrarPago']);
          
        }



        filtrarPagos() {
          const tipoMembresia = (document.getElementById("tipoMembresia") as HTMLSelectElement).value;
          if (tipoMembresia) {
              this.mostrarPagosMembresia(tipoMembresia);
          } else {
              console.log("Seleccione un tipo de membresía.");
          }
      }

      
     

      
}
