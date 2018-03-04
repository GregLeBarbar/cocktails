import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit } from '@angular/core';

import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { FilterPipe } from '../../shared/pipes/filter.pipe';


@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  // Le pipe custom FilterPipe est donc disponible uniquement pour ce composant
  providers: [FilterPipe]
})
export class CocktailListComponent implements OnInit {

  private subscription: Subscription;
  public search: string = "";
  public cocktails: Cocktail[];
  
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {

    // Initialise la liste des cocktails
    this.subscription = this.cocktailService.cocktails.subscribe( 
      (cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      }
    )
  }

  // supprime le cocktail dont l'id vaut 'cocktail_id'
  delete(cocktail_id): void {
    this.cocktailService.deleteCocktail(cocktail_id);
  }

  ngOnDestroy(): void {
    // lorsque l’Observer n’a plus besoin de recevoir de valeurs, on fait un appel à unsubscribe
    // pour éviter de gaspiller des ressources en créant des fuites mémoires.
    this.subscription.unsubscribe();
  }

}