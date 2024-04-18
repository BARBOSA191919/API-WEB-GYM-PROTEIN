import { TestBed } from '@angular/core/testing'; // Importación de TestBed desde Angular Core Testing

import { AuthService } from './auth.service'; // Importación del servicio AuthService para ser probado

describe('AuthService', () => { // Descripción de la suite de pruebas para el servicio AuthService
  let service: AuthService; // Declaración de la variable service para almacenar una instancia del servicio

  beforeEach(() => { // Configuración que se ejecuta antes de cada prueba
    TestBed.configureTestingModule({}); // Configuración del módulo de pruebas
    service = TestBed.inject(AuthService); // Inyección del servicio dentro de la variable service
  });

  it('should be created', () => { // Prueba para verificar si el servicio se crea correctamente
    expect(service).toBeTruthy(); // Verificación de que la instancia del servicio no sea nula
  });
});
