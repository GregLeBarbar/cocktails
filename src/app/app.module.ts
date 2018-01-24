import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CocktailDetailComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';


@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent,
    CocktailDetailComponent,
    HeaderComponent,
    CocktailsContainerComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
