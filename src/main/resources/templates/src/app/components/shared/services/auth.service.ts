import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(
    private firebaseAuthenticationService: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {
    // OBSERVER save user in localStorage (log-in) and setting up null when log-out
    this.firebaseAuthenticationService.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', 'null');
      }
    })

  }

  // log-in with email and password
  logInWithEmailAndPassword(email: string, password: string) {
    return this.firebaseAuthenticationService.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.userData = userCredential.user
        this.observeUserState()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error de autenticación',
          text: 'El correo electrónico o la contraseña son incorrectos.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      })
  }

// log-in with google
  logInWithGoogleProvider() {
    return this.firebaseAuthenticationService.signInWithPopup(new GoogleAuthProvider())
      .then(() => this.observeUserState())
      .catch((error: Error) => {
        Swal.fire({
          title: 'Error de autenticación',
          text: 'Ha ocurrido un error al iniciar sesión con Google.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      })
  }

// Función para obtener el mensaje de error en español
  getErrorMessage(error: any): string {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'La dirección de correo electrónico tiene un formato incorrecto.';
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta.';
      // Puedes agregar más casos según sea necesario
      default:
        return error.message;
    }
  }

  // sign-up with email and password
  signUpWithEmailAndPassword(email: string, password: string) {
    return this.firebaseAuthenticationService.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.userData = userCredential.user
        this.observeUserState()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error al registrarse',
          text: 'Ha ocurrido un error al registrar la cuenta.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      })
  }

  observeUserState() {
    this.firebaseAuthenticationService.authState.subscribe((userState) => {
      userState && this.ngZone.run(() => this.router.navigate(['dashboard']))
    })
  }

  // return true when user is logged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  // logOut
  logOut() {
    return this.firebaseAuthenticationService.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

}
