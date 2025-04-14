export interface Empleado{

    empleadoID: number,
nombreCompleto: string,
    cedula: string,
    telefono: string,
    cargo: string,
    horarioDeTrabajo:string ,
    salario: number,
    usuario_creador : string,
    fechaDeCreacion: Date

}

export interface EmpleadoResponse{

    proceso: number,
    empleadoID: number,
    nombreCompleto: string,
        cedula: string,
        telefono: string,
        cargo: string,
        horarioDeTrabajo:string ,
        salario: number,
        usuario : string,
        estado:number
    
    }