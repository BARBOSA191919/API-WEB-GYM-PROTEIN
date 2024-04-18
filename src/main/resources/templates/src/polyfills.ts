/**
 * Importación de los polyfills para módulos de Node.js.
 * Estos polyfills permiten el uso de ciertos módulos de Node.js en el entorno del navegador.
 */

import 'stream-browserify';
import 'crypto-browserify';
/**
 * Polyfills para módulos de Node.js.
 * Establece las propiedades globales 'global', 'process' y 'Buffer'
 * para emular el comportamiento de Node.js en el navegador.
 */
(window as any).global = window; // Establece la propiedad 'global' como una referencia a 'window'
(window as any).process = {
  env: { DEBUG: undefined }, // Define el entorno de proceso con una propiedad 'env' que contiene un objeto vacío
};
(window as any).Buffer = require('buffer').Buffer; // Importa el módulo 'buffer' y establece 'Buffer' como una propiedad global



