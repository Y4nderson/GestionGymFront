export interface Pago {
    pagoID: number,
    clienteID: number,
    cliente: string,
    tipoDeMembresiaID: number,
    tipoMembresia: string,
    monto: number,
    metodoDePago: string,
    concepto: string,
    fechaPago: Date,
    usuarioID: number,
    usuarioRegistro: string
  }


  export interface PagoResponse {

    proceso: number,
    pagoID: number,
    cedula: string,
    tipo_membresia_nombre: string,
    metodoPago: string,
    concepto: string ,
    usuario: string,


  }