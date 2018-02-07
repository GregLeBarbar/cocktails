import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CocktailDetailComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { PanierComponent } from './panier/panier.component';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { AppRouting } from './app.routing';
import { PanierService } from './shared/services/panier.service';
import { CocktailEditComponent } from './cocktails-container/cocktails-edit/cocktails-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent,
    CocktailDetailComponent,
    HeaderComponent,
    CocktailsContainerComponent,
    ActiveDirective,
    PanierComponent,
    IngredientsListComponent,
    CocktailEditComponent,

  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(), 
    AppRouting
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
