import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'https://localhost:7117/api/Login';

  constructor(
    private http: HttpClient,
    private ruta: Router
  ) { }

  login(usuario: string, contrasenaHash: string): Observable<any> {
    const body = { usuario, contrasenaHash };
    return this.http.post(this.apiURL, body);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('activeTabs');
    // Notifica a otras pestañas que se realizó logout
    localStorage.setItem('logout', Date.now().toString());
    this.ruta.navigate(['/login']);
  }

 
  esAutenticado(): boolean {
    const token = localStorage.getItem('token');
    console.log('🔐 Token en esAutenticado:', token);
    if (!token) return false;
  
    try {
      const decoded: any = jwtDecode(token);
      console.log('📦 Contenido decodificado del token:', decoded);
  
      const exp = decoded.exp;
      const now = Math.floor(Date.now() / 1000);
      console.log(`⏱️ Expira en: ${exp} | Ahora: ${now}`);
  
      if (exp < now) {
        console.warn('⚠️ Token expirado. Se elimina.');
        localStorage.removeItem('token');
        return false;
      }
  
      return true;
    } catch (e) {
      console.error('❌ Error al decodificar el token:', e);
      return false;
    }
  }
  
  
  abrirEnNuevaPestana(ruta: string) {
    const url = this.ruta.createUrlTree([ruta]).toString();
    window.open(url, 'AUTH_POPUP');
  }
}
