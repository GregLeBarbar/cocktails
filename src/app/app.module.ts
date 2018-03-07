/**
 * Ce module est notre module root.
 * Il est appelé par main.ts
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';

import { CocktailModule } from './cocktails-container/cocktail.module'

import { PanierService } from './shared/services/panier.service';


@NgModule({
  // Dans declarations, on ne peut mettre que des pipes, des components ou des directives
  // un declarable (pipe, component ou directive) ne peut être déclaré que dans un module
  declarations: [
    AppComponent,
    HeaderComponent,
    // ActiveDirective, Cette directive est inutile depuis la mise en place des routes
    PanierComponent,
    IngredientsListComponent
  ],
  // Tous les modules à importer pour le bon fonctionnement de app.module
  imports: [
    BrowserModule, // BrowserModule import CommonModule => CommonModule est accessible
    NgbModule.forRoot(), // pour bootstrap 
    AppRouting, // Module pour les routes
    FormsModule, 
    ReactiveFormsModule, // pour la gestion des formulaires data-driven
    HttpClientModule, // pour la gestion des appels HTTP
    CocktailModule // Notre module cocktail
  ],
  // En définissant ici le service panier, ce dernier est présent dans tout le module
  providers: [PanierService],
  // Il n'y a que le module root qui possède un bootstrap.
  // AppComponent aura le routlet parent
  bootstrap: [AppComponent]
})
export class AppModule { }