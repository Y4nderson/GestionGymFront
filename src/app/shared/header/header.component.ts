import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  constructor(private route: Router, private loginService:LoginService){


  }

  logout(){

    this.loginService.logout()
    this.route.navigate(['/login'])
  }

}
