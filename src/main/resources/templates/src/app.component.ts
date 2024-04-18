/**
 * Importaciones necesarias de Angular para definir un componente.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
/**
 * Clase que implementa la lógica del componente 'AppComponent'.
 */
export class AppComponent {
  title = 'fireauth-angular-test';
}
