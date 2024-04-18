// Importación del decorador Component desde Angular Core
import { Component } from '@angular/core';
// Importación del servicio AuthService desde '../shared/services/auth.service'
import { AuthService } from '../shared/services/auth.service';

// Decorador @Component que define las propiedades del componente LoginComponent
@Component({
  // Selector que define cómo se invocará este componente en el HTML
  selector: 'app-login',
  templateUrl: './login.component.html',
  // Ruta del archivo CSS que define los estilos del componente
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Constructor del componente, que recibe una instancia del servicio AuthService
  constructor(private authService: AuthService) {

  }

  // Método logIn que llama al método logInWithEmailAndPassword del servicio AuthService
  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }

  // Método logInWithGoogle que llama al método logInWithGoogleProvider del servicio AuthService
  logInWithGoogle() {
    this.authService.logInWithGoogleProvider();
  }

}
