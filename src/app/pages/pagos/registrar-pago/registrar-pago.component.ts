import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoService } from '../../../services/pago.service';
import { Pago, PagoResponse } from '../../../interfaces/pago.interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-pago',
  templateUrl: './registrar-pago.component.html',
  styleUrl: './registrar-pago.component.css'
})
export class RegistrarPagoComponent {

  pagoForm:FormGroup
constructor(private ruta:Router, private pagosService:PagoService, private fb:FormBuilder,private rutas: ActivatedRoute){

  this.pagoForm = this.fb.group({

    proceso:[1,Validators.required],
    pagoID:[0,Validators.required],
    cedula:['',Validators.required],
    tipo_membresia_nombre:['',Validators.required],
    metodoPago:['',Validators.required],
    concepto:['',Validators.required],
    usuario:['',Validators.required],

  })
}
ultimoPago: PagoResponse | null = null;

 pagos: Pago[] = [];
CrearPago(){


  if(this.pagoForm.valid){


    const nuevoPago: PagoResponse = this.pagoForm.value;
    this.pagosService.CrearPago(nuevoPago).subscribe(

         response =>{
      
                Swal.fire({
                  icon: 'success',
                  title: '¡Éxito!',
                  text: 'Pago registrado correctamente',
                  confirmButtonColor: '#28a745' // verde
                });
                this.ruta.navigate(['/pagos']);
              },
              error =>{
                Swal.fire({
                  icon: 'error',
                  title: '¡Error!',
                  text: 'Cliente con esa cedula no existe',
                  confirmButtonColor: '#dc3545' // rojo
                });
              
      
              }
    )

  }
  else{Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Rellena todos los campos antes de registrar el Pago',
        confirmButtonColor: '#dc3545' // rojo
      });}
}



  Pagos(){

    this.ruta.navigate(['/pagos'])
  }


  ngOnInit(): void {
    // Leer la cédula desde los query parameters
    this.rutas.queryParams.subscribe(params => {
      const cedula = params['cedula'];
      if (cedula) {
        // Rellenar automáticamente el campo de cédula del formulario.
        this.pagoForm.patchValue({ cedula });
        // Llamar al servicio para obtener el último pago del cliente.
        this.mostrarUltimoPagoCedula(cedula);
      }
    });
  }

  mostrarUltimoPagoCedula(cedula: string) {
    this.pagosService.obtenerUltimoPagoPorCedula(cedula).subscribe(
      (respuesta) => {
        // Si el servicio devuelve un arreglo, tomamos el primero.
        const pagoData = Array.isArray(respuesta) ? respuesta[0] : respuesta;
        if (pagoData) {
          // Guardamos la información del último pago (opcional)
          this.ultimoPago = pagoData;
          // Rellenamos los campos que querés autocompletar.
          // Por ejemplo, si el último pago trae el tipo de membresía y método de pago:
          this.pagoForm.patchValue({
            tipo_membresia_nombre: pagoData.tipo_membresia_nombre || '',
            metodoPago: pagoData.metodoPago || '',
             concepto: pagoData.concepto || '',
          usuario: pagoData.usuario || ''
            // Puedes incluir más campos si los tienes definidos.
          });
        }
      },
      (error) => {
        console.log(error);
        // Si no hay último pago, no hacemos nada o mostramos un mensaje.
      }
    );
  }

}
