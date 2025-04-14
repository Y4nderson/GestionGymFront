import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, ClienteResponse } from '../interfaces/cliente.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  
    private apiURL = 'https://localhost:7117/api/Cliente'
    private ApiURL = 'https://localhost:7117/api/Cliente/inactivos'
    private AiURL = 'https://localhost:7117/api/Cliente/activos'
    private APIURL = 'https://localhost:7117/api/Cliente/porVencer'
    private APIFiltroURL = 'https://localhost:7117/api/Cliente/buscar?filtro='
    private APICantidadURL = 'https://localhost:7117/api/Cliente/cantidadTotalClientes'
  
    constructor(
  
  private http: HttpClient
  
    ) { }
  
  
    mostrarCliente()
    {
  
  
     return this.http.get<Cliente[]>(this.apiURL)
  
    }

    mostrarClienteInactivos()
    {
  
  
      return this.http.get<Cliente[]>(this.ApiURL)
      
    }

    mostrarClienteActivos()
    {

  
  
     return this.http.get<Cliente[]>(this.AiURL)
          
    }
    
    mostrarClienteVencer()
    {

  
  
     return this.http.get<Cliente[]>(this.APIURL)
          
    } 

    mostrarClienteCantidad(): Observable<any> {
      return this.http.get<any>(`${this.APICantidadURL}`);
  }
  


mostrarClienteFiltro(filtro: string) {

  const apiUrl = `${this.APIFiltroURL}${filtro}`;
  return this.http.get<Cliente[]>(apiUrl); 

}

CrearCliente(cliente:ClienteResponse):Observable<any>{


  return this.http.post(this.apiURL, cliente)
}


eliminarCliente(idCliente:number)
{
  const Url = `${this.apiURL}/${idCliente}`;
     return this.http.delete(Url); 
}

}
