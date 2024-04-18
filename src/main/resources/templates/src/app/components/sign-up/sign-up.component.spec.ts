// Importaciones necesarias para las pruebas unitarias
import { ComponentFixture, TestBed } from '@angular/core/testing';
// Importación del componente a probar
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent]  // Declaración del componente a probar
    });
    fixture = TestBed.createComponent(SignUpComponent); // Creación del componente
    component = fixture.componentInstance; // Obtención de la instancia del componente
    fixture.detectChanges(); // Detección de cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verificación de que el componente se haya creado correctamente
  });
});
