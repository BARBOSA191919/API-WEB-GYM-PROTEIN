import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


// Agregar esta importación
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    private firebaseAuthenticationService: AngularFireAuth,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
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


  logInWithEmailAndPassword(email: string, password: string) {
    // Validación de correo electrónico
      const emailRegex = /^[\w-\.]+@(gmail\.com|edu\.co|hotmail\.com|usco\.edu\.co)$/;
    if (!emailRegex.test(email) || !email.endsWith('gmail.com')) {
      const emailInput = document.getElementById('emailInput');
      const emailError = document.getElementById('emailError');
      if (emailInput && emailError) {
        emailInput.style.borderColor = 'red';
        emailError.innerText = 'El correo electrónico debe ser válido y tener un dominio aceptado (gmail.com, edu.co, hotmail.com, usco.edu.co)';
      }
      return; // Detener la ejecución si el correo electrónico es inválido
    }


    // Validación de contraseña con expresión regular
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      const passwordInput = document.getElementById('passwordInput');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput && passwordError) {
        passwordInput.style.borderColor = 'red';
        passwordError.innerText = 'La contraseña debe tener al menos una mayúscula, una minúscula y un número';
      }
      return; // Detener la ejecución si la contraseña no cumple con los requisitos
    }

    return this.firebaseAuthenticationService.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.userData = userCredential.user;
        this.observeUserState();
        // Alerta de sesión exitosa
        Swal.fire({
          title: '¡Sesión exitosa!',
          text: '¡Has iniciado sesión correctamente!',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      })
      .catch((error) => {
          // Tu código de manejo de errores existente aquí
          Swal.fire({
            title: 'Error al iniciar sesion ',
            text: 'Ha ocurrido un error al iniciar la cuenta o puede que no estes registrado',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        if (emailInput && passwordInput && emailError && passwordError) {
          emailInput.style.borderColor = 'red';
          passwordInput.style.borderColor = 'red';
          emailError.innerText = error.code === 'auth/invalid-email' ? this.getErrorMessage(error) : '';
          passwordError.innerText = error.code === 'auth/wrong-password' ? this.getErrorMessage(error) : '';
        }
      });
  }

  logInWithGoogleProvider() {
    return this.firebaseAuthenticationService.signInWithPopup(new GoogleAuthProvider())
      .then(() => {
          this.sendVerificationEmail();
          this.observeUserState();

        // Alerta de inicio de sesión exitoso con Google
        Swal.fire({
          title: '¡Inicio de sesión exitoso!',
          text: '¡Has iniciado sesión con Google exitosamente!',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      })
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

  signUpWithEmailAndPassword(email: string, password: string) {
    // Validación de correo electrónico
      const emailRegex = /^[\w-\.]+@(gmail\.com|edu\.co|hotmail\.com|usco\.edu\.co)$/;
    if (!emailRegex.test(email)) {
      const emailInput = document.getElementById('emailInput');
      const emailError = document.getElementById('emailError');
      if (emailInput && emailError) {
        emailInput.style.borderColor = 'red';
        emailError.innerText = 'El correo electrónico debe ser válido y tener un dominio aceptado (gmail.com, edu.co, hotmail.com, usco.edu.co)';
      }
      return; // Detener la ejecución si el correo electrónico es inválido
    }

    // Validación de contraseña con expresión regular
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      const passwordInput = document.getElementById('passwordInput');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput && passwordError) {
        passwordInput.style.borderColor = 'red';
        passwordError.innerText = 'La contraseña debe tener al menos una mayúscula, una minúscula y un número';
      }
      return; // Detener la ejecución si la contraseña no cumple con los requisitos
    }

    return this.firebaseAuthenticationService.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Cuenta creada correctamente
        this.userData = userCredential.user;
        this.sendVerificationEmail(); // Envía el correo de verificación
        this.observeUserState();

      })
      .then(() => {
        this.observeUserState();
        // Alerta de registro exitoso
        Swal.fire({
          title: '¡Registro exitoso!',
          text: '¡Tu cuenta ha sido creada exitosamente!',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      })
      .catch((error) => {
        // Tu código de manejo de errores existente aquí
        Swal.fire({
          title: 'Error al registrarse',
          text: 'Ha ocurrido un error al registrar la cuenta o no cumples con los requisitos para crearla',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
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
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this.firebaseAuthenticationService.signOut().then(() => {
                    localStorage.removeItem('user');
                    this.router.navigate(['login']);
                });
            }
        });
    }

     sendVerificationEmail() {
         this.firebaseAuthenticationService.authState.subscribe((user) => {
             if (user) {
                 user.sendEmailVerification()
                     .then(() => {
                         console.log('Correo electrónico de verificación enviado con éxito');
                     })
                     .catch(error => {
                         console.error('Error al enviar el correo electrónico de verificación:', error);
                     });
             } else {
                 console.error('No se pudo obtener el usuario actual');
             }
         });
     }


}

