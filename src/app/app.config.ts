import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// integrate firebase
import {provideFirebaseApp, initializeApp } from '@angular/fire/app'
// integrate auth
import { provideAuth, getAuth } from '@angular/fire/auth'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideFirebaseApp( () => initializeApp({
      apiKey: "AIzaSyBWb3FPtSEu8lv9lU_b71vLfcuLIAqjMGU",
      authDomain: "processcoach-8fa41.firebaseapp.com",
      projectId: "processcoach-8fa41",
      storageBucket: "processcoach-8fa41.firebasestorage.app",
      messagingSenderId: "611190270566",
      appId: "1:611190270566:web:208ca9f2d9f4cd0f3c1ba7",
      measurementId: "G-GB0LCQ4VB5"
    })), 
    provideAuth(() => getAuth()),
  ],
};
