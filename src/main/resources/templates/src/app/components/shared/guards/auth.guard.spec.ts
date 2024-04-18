import { TestBed } from '@angular/core/testing';  // Importación del módulo de pruebas de Angular
import { CanActivateFn } from '@angular/router'; // Importación del tipo de función CanActivateFn


import { AuthGuard } from './auth.guard'; // Importación del guardia de autenticación

describe('authGuard', () => { // Inicio de la descripción de las pruebas para el guardia de autenticación
  const executeGuard: CanActivateFn = (...guardParameters) => // Definición de la función executeGuard para ejecutar el guardia
    TestBed.runInInjectionContext(() => AuthGuard(...guardParameters)); // Ejecución del guardia dentro del contexto de inyección de dependencias de las pruebas

  beforeEach(() => { // Configuración antes de cada prueba
    TestBed.configureTestingModule({}); // Configuración del módulo de pruebas de Angular
  });

  it('should be created', () => { // Prueba: debería ser creado
    expect(executeGuard).toBeTruthy(); // Se espera que la función executeGuard exista (es decir, que el guardia se haya creado correctamente)
  });
});
