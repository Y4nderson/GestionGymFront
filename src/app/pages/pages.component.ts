import { AfterContentInit, Component } from '@angular/core';


declare function  InicializarTemplate():void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements AfterContentInit{


  ngAfterContentInit(): void {
    
    InicializarTemplate();


  }


  
}
