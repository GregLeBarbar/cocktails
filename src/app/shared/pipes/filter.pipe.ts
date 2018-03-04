/**
 * Création d'un pipe personnalisé pour filtrer la liste de cocktail 
 * par le nom des cocktails.
 * 
 * Ce pipe est utilisé dans le composant CocktailListComponent
 */
import { Pipe, PipeTransform } from '@angular/core';

import { Cocktail } from '../models/cocktail.model';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // cette méthode retourne :
  // - soit une liste de cocktails 
  // - soit null si aucun nom de cocktail ne correspond au pattern de recherche
  transform(cocktails: Cocktail[], search: string): Cocktail[] | null {

    // si pas de pattern de recherche
    if (!search.length) {
      // on retourne tous les cocktails
      return cocktails;
    } else {
      // sinon on filtre sur le nom des cocktails
      return cocktails.filter(
        cocktail => cocktail.name.toLowerCase().includes(search.toLowerCase())
      )
    }
  }
}