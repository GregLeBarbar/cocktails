import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail(
      'Mojito', 
      'https://www.atelierdeschefs.com/media/recette-e7513-cocktail-mojito.jpg', 
      'Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.',
      [
        new Ingredient('perrier', 1),
        new Ingredient('citron', 2),
        new Ingredient('sucre', 3),
      ]
      ),
    new Cocktail(
      'Margarita', 
      'https://images.crateandbarrel.com/is/image/Crate/GarciaMargarita15ozSHS16', 
      'Margarita',
      [
        new Ingredient('limonade', 1),
        new Ingredient('citron', 2),
        new Ingredient('sel', 3),
      ]
      ),
    new Cocktail(
      'Sour', 
      'https://cdn.liquor.com/wp-content/uploads/2016/08/03142547/Most-Popular-Cocktail-Recipes-July-2016-whiskey-sour-720x378-social.jpg', 
      'Sour',
      [
        new Ingredient('perrier', 1),
        new Ingredient('jus de frais', 2)
      ]
      ),
  ]);

  constructor() { }

  getCocktail(index:number): Cocktail {
    return this.cocktails.value[index];
  }

  addCocktail(cocktail: Cocktail): void{
    const cocktails = this.cocktails.value.slice();
    cocktail = new Cocktail(
      cocktail.name, 
      cocktail.image, 
      cocktail.description, 
      cocktail.ingredients.map<Ingredient>(
        ingredient  => new Ingredient(ingredient.name, ingredient.quantity)
      )
    )
    cocktails.push(cocktail);
    this.cocktails.next(cocktails);
  }

  updateCocktail(updateCocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.map( c => c.name ).indexOf(updateCocktail.name);
    cocktails[index] = updateCocktail;
    this.cocktails.next(cocktails);
  }

}