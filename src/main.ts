/**
 * Lorsque l'on fait un ng serve, c'est ce fichier qui va être appelé.
 * Ce fichier joue le rôle d'un fichier d'amorçage (bootstrap)
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Boostrap dans un browser, le module AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
