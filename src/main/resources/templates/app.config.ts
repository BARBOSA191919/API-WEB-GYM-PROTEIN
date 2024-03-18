import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fireautd-video","appId":"1:295054113989:web:69d4866e7a1392d66904ac","storageBucket":"fireautd-video.appspot.com","apiKey":"AIzaSyCka0Yeb3Pymht3PLViJ7XOijdlZNe2P8Q","authDomain":"fireautd-video.firebaseapp.com","messagingSenderId":"295054113989"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};





