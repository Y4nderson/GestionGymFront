import { Component, HostListener, OnDestroy } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'GestionGym';

  private channel = new BroadcastChannel('auth_channel');
  private isTabActive = true;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // Notifica a otras pestañas que está activa
    this.channel.postMessage({ type: 'HELLO' });

    // Escucha mensajes de otras pestañas
    this.channel.onmessage = (event) => {
      if (event.data.type === 'HELLO') {
        this.isTabActive = true;
      }
    };

    // Verifica si hay otras pestañas activas en 200ms
    setTimeout(() => {
      if (!this.isTabActive) {
        console.log('🧼 No hay otras pestañas activas. Limpiando token.');
        localStorage.removeItem('token');
      }
    }, 200);
  }

  ngOnDestroy(): void {
    this.channel.close();
  }

  // Antes de cerrar esta pestaña
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event): void {
    this.isTabActive = false;
    // Dejamos que las demás pestañas digan si siguen vivas
    this.channel.postMessage({ type: 'PING' });
  }
  

}
