import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';


@Injectable()
export class PanierService {

  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject<Ingredient[]>(null);
  
  constructor() {}

  addIngredients(ingredients: Ingredient[]): void {

    // this.panier.value permet de récupérer la valeur actuelle du BehaviorSubject
    const currentValue = this.panier.value;

    if (currentValue && currentValue.length){
      
      // si le panier n'est pas vide on concatène les ingrédients au contenu du panier
      // puis on émet le nouveau contenu du panier
      this.panier.next(currentValue.concat(ingredients))

    } else {
      
      // si le panier est vide, on émet simplement le nouveau contenu du panier
      this.panier.next(ingredients);
    } 
  }
}