import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pago, PagoResponse } from '../interfaces/pago.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  
      private apiURL = 'https://localhost:7117/api/Pago'
      private ApiURLRangos = 'https://localhost:7117/api/Pago/ObtenerPagosRangoFechas?';
      private ApiURLAntiguos = 'https://localhost:7117/api/Pago/ObtenerPagosAntiguos'
      private ApiURLMembresia = 'https://localhost:7117/api/Pago/ObtenerNombreMembresia?nombreMembresia='
      private ApiURLCedula = 'https://localhost:7117/api/Pago/ObtenerPagosPorCliente?nombreCliente=';
      private ApiURLCantidad = 'https://localhost:7117/api/Pago/ObtenerPagosCantidad';
      private ApiURLPagoRe = 'https://localhost:7117/api/Pago/ObtenerPagosUltimoCliente?cedula=';
   
    
      constructor(
    
    private http: HttpClient
    
      ) { }
    
    
      mostrarPago()
      {
    
    
       return this.http.get<Pago[]>(this.apiURL)
    
      }

      mostrarAntiguos()
      {
        
    
       return this.http.get<Pago[]>(this.ApiURLAntiguos)
    
      }

      mostrarPagosMembresia(membresia: string)
      {
        
        const ApiURLMembresia = `${this.ApiURLMembresia}${membresia}`;
       return this.http.get<Pago[]>(ApiURLMembresia)
    
      }


      mostrarPagosCedula(cedula: string)
      {
        
        const ApiURLCedula = `${this.ApiURLCedula}${cedula}`;
       return this.http.get<Pago[]>(ApiURLCedula)
    
      }


      mostrarPagosPorRango(filtro: string) {
        const apiUrl = `${this.ApiURLRangos}${filtro}`;
        return this.http.get<any[]>(apiUrl);
      }
      
 mostrarPagosCantidad(): Observable<any> {
      return this.http.get<any>(`${this.ApiURLCantidad}`);
  }

  CrearPago(pagoResponse:PagoResponse):Observable<any>{

    return this.http.post(this.apiURL,pagoResponse)
  }


  obtenerUltimoPagoPorCedula(cedula: string): Observable<any> {
    return this.http.get(`${this.ApiURLPagoRe}${cedula}`);
  }
  

  
}
