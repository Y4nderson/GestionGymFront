import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado, EmpleadoResponse } from '../interfaces/empleado.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


private apiURL = 'https://localhost:7117/api/Empleado'
private apiURLD = 'https://localhost:7117/api/Empleado/'
private apiURLNombre = 'https://localhost:7117/api/Empleado/ObtenerPagosPorEmpleado?nombreEmpleado='

  constructor( private http: HttpClient) { }
  


  mostrarEmpleado(){

  
    return this.http.get<Empleado[]>(this.apiURL)
  };

  mostrarEmpleadoNombre(nombre:string){



    const apiUrl = `${this.apiURLNombre}${nombre}`;
    return this.http.get<Empleado[]>(apiUrl)
  }


  CrearEmpleado(empleado: EmpleadoResponse):Observable<any>{

      return this.http.post(this.apiURL,empleado)
    


  }
  eliminarEmpleado(idEmpleado:number)
  {
    const Url = `${this.apiURLD}${idEmpleado}`;
       return this.http.delete(Url); 
  }

}


