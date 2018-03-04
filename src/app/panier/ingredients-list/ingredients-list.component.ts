import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';


@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html'
})
export class IngredientsListComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[] = [];
  private subscription: Subscription;

  // Injection du service panier 
  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.subscription = this.panierService.panier.subscribe( 
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      } 
    )
  }

  ngOnDestroy() {
    // lorsque l’Observer n’a plus besoin de recevoir de valeurs, on fait un appel à unsubscribe
    // pour éviter de gaspiller des ressources en créant des fuites mémoires.
    this.subscription.unsubscribe();
  }
}