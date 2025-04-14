import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asistencia, Asistencia2 } from '../interfaces/asistencia.interface';
import { RegistrarAsistencia } from '../interfaces/registrarAsistencia.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private apiURL = 'https://localhost:7117/api/Asistencia'
  private apiReURL = 'https://localhost:7117/api/RegistrarAsistencia'
  private apiBusquedaURL = 'https://localhost:7117/api/BuscarCliente/buscar/'
  private apiBusquedaNombreURL = 'https://localhost:7117/api/Asistencia/ObtenerAsistenciaPorCliente?nombre='

  constructor(

private http: HttpClient

  ) { }


  mostrarAsistencia(){


return this.http.get<Asistencia[]>(this.apiURL)

  }

  mostrarAsistenciaPorBusqueda(cedula: string): Observable<Asistencia2[]> {
    return this.http.get<Asistencia2[]>(`${this.apiBusquedaURL}${cedula}`);
  }
  mostrarAsistenciaNombre(nombre: string): Observable<any> {
    
    return this.http.get<Asistencia[]>(`${this.apiBusquedaNombreURL}${nombre}`);

  }
  

  RegistrarAsistencia(registro:RegistrarAsistencia):Observable<any>{


    return this.http.post(this.apiReURL,registro)
  }
}
