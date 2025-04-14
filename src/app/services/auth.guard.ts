import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const login = inject(LoginService);
  const router = inject(Router);

  // Permite rutas que no requieren autenticación
  if (route.data?.['skipAuth']) return true;

  // Si está autenticado en esta pestaña, continua
  if (login.esAutenticado()) {
    return true;
  }

  // Intenta obtener token de la ventana padre (para ventanas emergentes)
  try {
    if (window.opener && window.opener.localStorage.getItem('token')) {
      localStorage.setItem('token', window.opener.localStorage.getItem('token')!);
      return true;
    }
  } catch (e) {
    console.warn('No se pudo acceder a la ventana padre', e);
  }

  // Si es una ventana emergente con nombre específico, permite acceso temporal
  if (window.name === 'AUTH_POPUP') {
    return true;
  }

  // Por defecto redirige a login
  return router.createUrlTree(['/login']);
};
