import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.css']
})
export class CocktailsContainerComponent implements OnInit {
  
  public cocktail: Cocktail;

  public cocktails: Cocktail[] = [
    new Cocktail(
      'Mojito', 
      'https://www.atelierdeschefs.com/media/recette-e7513-cocktail-mojito.jpg', 
      'Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.',
      ),
    new Cocktail(
      'Margarita', 
      'https://images.crateandbarrel.com/is/image/Crate/GarciaMargarita15ozSHS16', 
      'Margarita',
      ),
    new Cocktail(
      'Sour', 
      'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg', 
      'Sour',
      ),
  ];

  constructor() { }

  ngOnInit() {
    this.cocktail = this.cocktails[0];
  }

  pickCocktail(index: number): void {
    this.cocktail = this.cocktails[index];
  }

}
