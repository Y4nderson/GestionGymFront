import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoMembresia, TipoMembresiaResponse } from '../interfaces/tipoMembresia.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoMembresiaService {

  private apiURL = 'https://localhost:7117/api/TipoMembresia'
  private apiURLD = 'https://localhost:7117/api/TipoMembresia/'
  
  
    constructor( private http: HttpClient) { }
    
  
  
    mostrarTipoMembresia(){
  
    
      return this.http.get<TipoMembresia[]>(this.apiURL)
    };

    eliminarTipoMembresia(idTipoMembresia:number)
    {
      const Url = `${this.apiURLD}${idTipoMembresia}`;
         return this.http.delete(Url); 
    }
    CrearTipoMembresia(tipoMembresia:TipoMembresiaResponse):Observable<any>{


      return this.http.post(this.apiURL,tipoMembresia)
    }
}
