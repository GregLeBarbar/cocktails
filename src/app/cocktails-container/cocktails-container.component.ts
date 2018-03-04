import { Component, OnInit } from '@angular/core';

import { CocktailService } from '../shared/services/cocktail.service';


@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  // En déclarant ici le service cocktail, ce dernier est disponible dans 
  // le composant CocktailsContainer et les composants "enfants" cad dans
  // ceux présents dans le répertoire coctails-container 
  providers: [CocktailService]
})
export class CocktailsContainerComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}