import { TestBed } from '@angular/core/testing'; //pruebas test
import { RouterTestingModule } from '@angular/router/testing'; //  módulo de pruebas para enrutamiento
import { AppComponent } from '../app.component'; //componente principal de la aplicación

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule], // Importa el módulo de pruebas para enrutamiento
    declarations: [AppComponent] // Declaración del componente principal de la aplicación
  }));

  // Prueba para verificar que el componente se crea correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app).toBeTruthy();  // Verifica que el componente se haya creado correctamente
  });

  // Prueba para verificar el título del componente
  it(`should have as title 'fireauth-angular-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fireauth-angular-test');
  });

  // Prueba para verificar que el título se renderice correctamente en el HTML
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Detecta los cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement;  // Obtiene el elemento HTML renderizado
    expect(compiled.querySelector('.content span')?.textContent).toContain('fireauth-angular-test app is running!'); // Verifica que el título se renderice correctamente en el HTML
  });
});


