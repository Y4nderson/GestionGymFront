import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membresia } from '../interfaces/membresia.interface';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {

  private apiUrl = 'https://localhost:7117/api/Membresia'
  private apiUrlNombre = 'https://localhost:7117/api/Membresia/ObtenerPagosPorCliente?nombre='
  constructor(private http: HttpClient) { }




  mostrarMembresias(){



    return this.http.get<Membresia[]>(this.apiUrl);
  }

  mostrarMembresiasNombre(nombre:string){


    const api = `${this.apiUrlNombre}${nombre}`
    return this.http.get<Membresia[]>(api);
  }

}
