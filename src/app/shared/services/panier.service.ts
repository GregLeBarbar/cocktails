import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PanierService {
  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(null);
  
  constructor() { }

  addIngredients(ingredients: Ingredient[]): void {

    // this.panier.value permet de récuper la valeur actuelle du BehaviorSubject
    const currentValue = this.panier.value;
    if (currentValue && currentValue.length){
      // concat permet de concaténer les ingrédients
      this.panier.next(currentValue.concat(ingredients))
    } else {
      // next permet d'émettre notre data
      this.panier.next(ingredients);
    } 
  }

}
