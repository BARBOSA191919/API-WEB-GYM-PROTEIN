import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // módulo de enrutamiento de Angular
import { LoginComponent } from './components/login/login.component'; // componente de inicio de sesión
import { SignUpComponent } from './components/sign-up/sign-up.component';  // componente de registro
import { DashboardComponent } from './components/dashboard/dashboard.component'; //  componente del panel de control
import { AuthGuard } from './components/shared/guards/auth.guard'; // Importa el guardia de autenticación


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta por defecto, redirecciona al inicio de sesión
  { path: 'login', component: LoginComponent }, // Ruta para el componente de inicio de sesión
  { path: 'sign-up', component: SignUpComponent },  // Ruta para el componente de registro
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] } // Ruta protegida para el panel de control, requiere autenticación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura las rutas principales del módulo raíz
  exports: [RouterModule] // Exporta el módulo de enrutamiento para su uso en otros módulos
})
export class AppRoutingModule { } // Define el módulo de enrutamiento de la aplicación
