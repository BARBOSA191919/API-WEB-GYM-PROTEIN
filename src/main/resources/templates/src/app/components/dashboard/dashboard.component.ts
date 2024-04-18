/**
 * Componente para el panel de control de la aplicación.
 * Este componente maneja la visualización del panel de control y proporciona funcionalidades como cerrar sesión y desplazamiento a secciones específicas.
 */

import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Variable para controlar la visualización de la opción de cerrar sesión
  showLogoutOption: boolean = true;

  constructor(private authService: AuthService) {}
  // Método getter para determinar si el usuario está actualmente autenticado
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;

  }
  // Método para alternar la visualización de la opción de cerrar sesión
  toggleLogoutOption() {
    this.showLogoutOption = !this.showLogoutOption;
  }

  // Método para desplazarse a una sección específica en la página
  scrollToSection(sectionName: string): void {
    const section = document.getElementsByName(sectionName)[0];
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }

  // Método para cerrar sesión del usuario
  logOut() {
    this.authService.logOut();
  }


}



