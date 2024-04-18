import { Injectable, NgZone } from '@angular/core'; //Injectable y NgZone desde Angular Core
import { GoogleAuthProvider } from '@angular/fire/auth'; //GoogleAuthProvider desde AngularFire
import { AngularFireAuth } from '@angular/fire/compat/auth'; //AngularFireAuth desde AngularFire
import { Router } from '@angular/router'; // Router desde Angular Router
import Swal from 'sweetalert2'; //para importar alertas


// Agregar esta importación
@Injectable({ //Injectable para que el servicio pueda ser inyectado
  providedIn: 'root' // Indica que el servicio estará disponible en el nivel raíz de la aplicación
})
export class AuthService {
  userData: any; // Variable para almacenar los datos del usuario

  constructor(
    //inyeccion a cada uno de los servicios
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


  logInWithEmailAndPassword(email: string, password: string) { // Método para iniciar sesión con correo electrónico y contraseña
    // Validación de correo electrónico
      const emailRegex = /^[\w-\.]+@(gmail\.com|edu\.co|hotmail\.com|usco\.edu\.co)$/; // Expresión regular para validar el correo electrónico
    if (!emailRegex.test(email) || !email.endsWith('gmail.com')) {  // Verifica si el correo electrónico no cumple con el formato o el dominio
      const emailInput = document.getElementById('emailInput'); // Obtiene el elemento del input de correo electrónico
      const emailError = document.getElementById('emailError'); // Obtiene el elemento del mensaje de error del correo electrónico
      if (emailInput && emailError) {
        emailInput.style.borderColor = 'red'; // Cambia el borde del input a rojo
        emailError.innerText = 'El correo electrónico debe ser válido y tener un dominio aceptado (gmail.com, edu.co, hotmail.com, usco.edu.co)';
      }
      return; // Detener la ejecución si el correo electrónico es inválido
    }


    // Validación de contraseña con expresión regular
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Expresión regular para validar la contraseña
    if (!passwordRegex.test(password)) { // Verifica si la contraseña no cumple con los requisitos
      const passwordInput = document.getElementById('passwordInput'); // Obtiene el elemento del input de contraseña
      const passwordError = document.getElementById('passwordError'); // Obtiene el elemento del mensaje de error de la contraseña
      if (passwordInput && passwordError) {
        passwordInput.style.borderColor = 'red'; // Cambia el borde del input a rojo
        passwordError.innerText = 'La contraseña debe tener al menos una mayúscula, una minúscula y un número'; // Establece el mensaje de error
      }
      return; // Detener la ejecución si la contraseña no cumple con los requisitos
    }

    // Inicia sesión con correo electrónico y contraseña utilizando el servicio de autenticación de Firebase
    return this.firebaseAuthenticationService.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {  // Promesa que se ejecuta cuando se completa la autenticación
        this.userData = userCredential.user; // Almacena los datos del usuario
        this.observeUserState(); // Observa el estado del usuario
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

  logInWithGoogleProvider() { // Método para iniciar sesión con Google
    return this.firebaseAuthenticationService.signInWithPopup(new GoogleAuthProvider())
      .then(() => { // Promesa que se ejecuta cuando se completa la autenticación
          this.sendVerificationEmail(); // Envía el correo de verificación
          this.observeUserState(); // Observa el estado del usuario

        // Alerta de inicio de sesión exitoso con Google
        Swal.fire({
          title: '¡Inicio de sesión exitoso!',
          text: '¡Has iniciado sesión con Google exitosamente!',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
      })
      .catch((error: Error) => { // Captura de errores
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
    switch (error.code) { // Caso de correo electrónico inválido
      case 'auth/invalid-email':
        return 'La dirección de correo electrónico tiene un formato incorrecto.';
      case 'auth/wrong-password': // Caso de contraseña incorrecta
        return 'La contraseña es incorrecta.';
      // Puedes agregar más casos según sea necesario
      default:
        return error.message; // Retorna el mensaje de error por defecto
    }
  }

  signUpWithEmailAndPassword(email: string, password: string) {
    // Validación de correo electrónico
      const emailRegex = /^[\w-\.]+@(gmail\.com|edu\.co|hotmail\.com|usco\.edu\.co)$/;  // Expresión regular para validar el correo electrónico
    if (!emailRegex.test(email)) { // Verifica si el correo electrónico no cumple con el formato
      const emailInput = document.getElementById('emailInput'); // Obtiene el elemento del input de correo electrónico
      const emailError = document.getElementById('emailError'); // Obtiene el elemento del mensaje de error del correo electrónico
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

    observeUserState() { // Método para observar el estado del usuario
        this.firebaseAuthenticationService.authState.subscribe((userState) => { // Suscripción al estado de autenticación del usuario
            userState && this.ngZone.run(() => this.router.navigate(['dashboard'])) // Navega al dashboard si el usuario está autenticado
        })
    }

    // return true when user is logged in
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!); // Obtiene el usuario desde el almacenamiento local
        return user !== null; // Retorna true si el usuario no es nulo
    }

  // Método para cerrar sesión

    logOut() {
        Swal.fire({ // Alerta de confirmación
            title: '¿Estás seguro?',
            text: '¿Quieres cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => { // Manejo de la respuesta
          if (result.isConfirmed) { // Si se confirma la acción
            this.firebaseAuthenticationService.signOut().then(() => { // Cierra la sesión utilizando el servicio de autenticación de Firebase
              localStorage.removeItem('user'); // Elimina al usuario del almacenamiento local
              this.router.navigate(['login']); // Navega al componente de inicio de sesión
            });
          }
        });
    }

     sendVerificationEmail() { // Método para enviar el correo de verificación
         this.firebaseAuthenticationService.authState.subscribe((user) => { // Suscripción al estado de autenticación del usuario
             if (user) { // Verifica si hay un usuario autenticado
                 user.sendEmailVerification() // Envía el correo de verificación
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

