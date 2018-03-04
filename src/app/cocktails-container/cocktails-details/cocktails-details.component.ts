import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Cocktail } from '../../shared/models/cocktail.model';
import { Ingredient } from '../../shared/models/ingredient.model';

import { CocktailService } from '../../shared/services/cocktail.service';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html'
})
export class CocktailDetailComponent implements OnInit {

  // Cocktail dont on souhaite afficher le detail
  public cocktail: Cocktail;

  // Identifiant du cocktail
  public cocktail_id: number;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private cocktailService: CocktailService, 
    private panierService: PanierService
  ) {}

  ngOnInit(): void {
    // Initialiser le cocktail en récupérant l'id du cocktail dans l'URL
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        if (params.index) {
          this.cocktail_id = params.index;
          this.cocktailService.getCocktail(params.index).subscribe(
            (cocktail: Cocktail) => this.cocktail = cocktail
          );
        } 
      }
    )
  }

  // Ajoute les ingrédients passés en paramètre au panier
  addPanier(ingredients: Ingredient[]): void { 
     this.panierService.addIngredients(ingredients);
  }

  // Retourne une liste de string formant une URL via routerLink
  getUrl(): string[] {
    return ['/cocktails', String(this.cocktail_id),  'edit' ]
  }
}