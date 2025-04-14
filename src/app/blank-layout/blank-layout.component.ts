// blank-layout.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-blank-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      width: 100vw;
    }
  `]
})
export class BlankLayoutComponent {}