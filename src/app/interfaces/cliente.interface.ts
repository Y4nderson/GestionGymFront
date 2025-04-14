
export interface Cliente {
   clienteID: number;
   nombreCompleto: string;
   cedula: string;
   telefono: string;
   correo: string;
   fechaDeInscripcion:  Date;
   fechaDeVencimiento:  Date;
   estado: number;
   tiempoRestante: string;
   estadoMembresia: string;
 }



 export interface ClienteResponse {

  proceso: number,
  clienteID: number,
  nombreCompleto: string,
  cedula: string,
  telefono: string,
  correo: string,
  fechaDeIncripcion: Date,
  fechaDeVencimiento:Date ,
  estado: number

 }