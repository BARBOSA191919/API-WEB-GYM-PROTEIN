/**
 * Importaciones necesarias de Angular para la plataforma de renderizado dinámico en el navegador.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
/**
 * Importación del módulo raíz de la aplicación.
 */

import { AppModule } from "./app.module";

/**
 * Inicialización y arranque del módulo raíz de la aplicación en la plataforma de renderizado dinámico.
 */

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
