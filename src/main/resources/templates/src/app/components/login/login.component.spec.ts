// Importación de módulos y componentes necesarios para las pruebas unitarias

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

// Descripción de las pruebas para el componente LoginComponent
describe('LoginComponent', () => {
  let component: LoginComponent;// Declaración de la variable para el componente
  let fixture: ComponentFixture<LoginComponent>;// Declaración de la variable para el fixture

  // Configuración antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent] // Declaración del componente a utilizar en las pruebas
    });
    fixture = TestBed.createComponent(LoginComponent); // Creación del fixture del componente
    component = fixture.componentInstance; // Asignación del componente del fixture a la variable
    fixture.detectChanges(); // Detección de cambios en el fixture
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Expectativa de que el componente sea verdadero (existente)
  });
});
