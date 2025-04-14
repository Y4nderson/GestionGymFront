export interface Usuario{


    usuarioID: number,
    usuario: string,
    contrasenaHash: string,
    correoElectronico: string,
    nombreCompleto: string,
    rol: string,
    permisos: string,
    estado: number,
    fechaDeCreacion: Date,
    ultimoAcceso: Date
}

export interface UsuarioResponse{

    proceso: number,
    usuarioID: number,
    usuario: string,
    contrasenahash: string,
    correoElectronico: string,
    nombreCompleto: string,
    rol: string,
    permisos: string,
  
}