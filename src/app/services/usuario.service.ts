import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioResponse } from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
    private apiURL = 'https://localhost:7117/api/Usuario'
    private apiURLD = 'https://localhost:7117/api/Usuario/'
    
    
      constructor( private http: HttpClient) { }
      
    
    
      mostrarUsuario(){
    
      
        return this.http.get<Usuario[]>(this.apiURL)
      };

      CrearUsuario(usuario:UsuarioResponse):Observable<any>{


        return this.http.post(this.apiURL, usuario)

      }

  eliminarUsuario(idUsuario:number)
  {
    const Url = `${this.apiURLD}${idUsuario}`;
       return this.http.delete(Url); 
  }
}
