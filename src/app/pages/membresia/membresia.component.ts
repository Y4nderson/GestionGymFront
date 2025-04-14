import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MembresiaService } from '../../services/membresia.service';
import { Membresia } from '../../interfaces/membresia.interface';

@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrl: './membresia.component.css'
})
export class MembresiaComponent {

  page:number = 1;

  membresia: Membresia[] = [];
  constructor(private ruta:Router, private membresiaService:MembresiaService){}


  ngOnInit(){
    this.mostrarMembresia();
  }

  mostrarMembresia(){


    this.membresiaService.mostrarMembresias().subscribe(

      (response) =>{

        this.membresia = response
      },
      (err)=>{

        console.log(Error)
      }
    )

  }

  mostrarMembresiasNombre(nombre:string){


    this.membresiaService.mostrarMembresiasNombre(nombre).subscribe(

      (response) =>{

        this.membresia = response
      },
      (err)=>{

        console.log(Error)
      }
    )

  }

}
