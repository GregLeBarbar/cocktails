import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CocktailDetailComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { CocktailEditComponent } from './cocktails-container/cocktails-edit/cocktails-edit.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';

import { PanierService } from './shared/services/panier.service';


@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent,
    CocktailDetailComponent,
    HeaderComponent,
    CocktailsContainerComponent,
    // ActiveDirective, Cette directive est inutile depuis la mise en place des routes
    PanierComponent,
    IngredientsListComponent,
    CocktailEditComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(), 
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // En définissant ici le service panier, ce dernier est présent dans tout le module
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }