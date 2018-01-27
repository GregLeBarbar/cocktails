import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
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
  ]);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() { }

  selectCocktail(index: number): void {
    this.cocktail.next(this.cocktails.value[index]);
  }

}
