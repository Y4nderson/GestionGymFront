import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:   ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private router: Router,private guestLogin: LoginService, private fb:FormBuilder) 
  {
    this.loginForm = this.fb.group({

      usuario:['',Validators.required],
      contrasenaHash:['',Validators.required]
    });    
 
  }

  login(){

    console.log('Login button clicked');


    if(this.loginForm.valid){


      const {usuario,contrasenaHash} = this.loginForm.value;
      this.guestLogin.login(usuario,contrasenaHash).subscribe(

        response=>{ 
          
        localStorage.setItem('token', response.token);
       this.router.navigate(['']); 
      
      
      },

           error =>{
                                        Swal.fire({
                                          icon: 'error',
                                          title: '¡Error!',
                                          text: 'El Usuario o Contraseña son incorrectos',
                                          confirmButtonColor: '#dc3545' // rojo
                                        });
                                      
                              
                                      }
                                    )
                                  }
                                  else{Swal.fire({
                                    icon: 'error',
                                    title: '¡Error!',
                                    text: 'Rellena todos los campos para entrar al Sistema',
                                    confirmButtonColor: '#dc3545' // rojo
                                  });}
   
  
    //window.open('/RegistrarAsistencia', '_blank');

  }
 


}
