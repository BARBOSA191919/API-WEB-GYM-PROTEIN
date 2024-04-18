// Importación de los módulos necesarios desde Angular Core
import { Component } from '@angular/core';
// Importación del servicio de autenticación compartido
import { AuthService } from '../shared/services/auth.service';

// Decorador @Component para definir las propiedades del componente
@Component({
  selector: 'app-sign-up', // Selector CSS que define la forma de insertar el componente en el HTML
  templateUrl: './sign-up.component.html', // Ruta del archivo HTML que define la vista del componente
  styleUrls: ['./sign-up.component.css'] // Ruta del archivo CSS que define los estilos específicos del componente
})

export class SignUpComponent {
  // Constructor del componente, inyecta el servicio de autenticación
  constructor(private authService: AuthService) {

  }

  // Método para realizar el registro con correo electrónico y contraseña
  signUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password); // Llama al método de registro del servicio de autenticación

  }
}
