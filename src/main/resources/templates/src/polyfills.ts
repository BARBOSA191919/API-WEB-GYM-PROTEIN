import 'stream-browserify';
import 'crypto-browserify';
// Polyfills for Node.js modules
(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};
(window as any).Buffer = require('buffer').Buffer;
