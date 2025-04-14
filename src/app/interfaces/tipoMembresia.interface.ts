export interface TipoMembresia{


    tipoDeMembresiaID: number,
    nombre: string,
    precio: number,
    estado: number,
    duracion: number
}

export interface TipoMembresiaResponse{


    proceso: number,
  tipoDeMembresiaID: number,
  nombre: string,
  precio: number,
  estado: number,
  duracion: number
}