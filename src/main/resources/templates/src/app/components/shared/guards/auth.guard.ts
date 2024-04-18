import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'; // Importación de tipos y clases relacionadas con enrutamiento
import { AuthService } from '../services/auth.service'; // Importación del servicio de autenticación
import { inject } from '@angular/core'; // Importación de la función inject para la inyección de dependencias

export const AuthGuard: CanActivateFn = // Definición del guardia de autenticación como una función que implementa CanActivateFn
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => { // Parámetros de la función de guardia: route y state

    const authService = inject(AuthService); // Inyección del servicio de autenticación
    const router = inject(Router); // Inyección del enrutador

    authService.isLoggedIn || router.navigate(["login"]); // Verificación de la autenticación. Si el usuario no está autenticado, redirige a la página de inicio de sesión

    return true; // Retorna verdadero para permitir la activación de la ruta
  };
