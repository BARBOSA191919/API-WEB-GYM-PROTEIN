// Importaciones necesarias para las pruebas unitarias
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

// Descripción del conjunto de pruebas para el componente DashboardComponent
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  // Configuración que se ejecuta antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]// Declaración del componente a probar
    });
    fixture = TestBed.createComponent(DashboardComponent);// Creación del component
    component = fixture.componentInstance;// Obtenemos una instancia del componente
    fixture.detectChanges(); // Detectamos los cambios en el componente
  });

  // Prueba para verificar si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprobamos que el componente exista
  });
});
