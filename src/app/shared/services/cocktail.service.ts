import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';


@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { 
    this.initCocktails();
  }

  initCocktails(): void {
    const URL = "http://127.0.0.1:8000/api/v1/cocktails/"

    // Interroge le backend pour obtenir la liste des cocktails.
    // et grâce à .next() émet la liste des cocktails
    this.http.get<Cocktail[]>(URL).subscribe( cocktails => {
      this.cocktails.next(cocktails);
    })
  }

  getCocktail(id:number): Observable<Cocktail> {

    const cocktails = this.cocktails.value.slice();
    let index = cocktails.findIndex(cocktail => cocktail.id == String(id));
    return this.cocktails.filter(cocktails => cocktails != null).map( (cocktails: Cocktail[]) => cocktails[index])
  }

  addCocktail(cocktail: Cocktail): void {

    // copy la liste des cocktails
    const cocktails = this.cocktails.value.slice();

    // instancie un nouveau cocktail à partir des données du formulaire
    // FIXME: Comment gérer les IDs dans ce cas ? Moi j'ai mis -1 mais c'est sale :-(
    cocktail = new Cocktail(
      "-1",
      cocktail.name, 
      cocktail.image, 
      cocktail.description, 
      cocktail.ingredients.map<Ingredient>(
        ingredient  => new Ingredient(
          "-1", 
          ingredient.name, 
          ingredient.quantity
        )
      )
    )
    
    // Ajoute le cocktail via HTTP POST au backend
    const URL = "http://127.0.0.1:8000/api/v1/cocktails/";
    this.http.post(URL, cocktail).subscribe( 
      (cocktail: Cocktail) => {
        // ajoute le cocktail à la liste (frontend)
        cocktails.push(cocktail);

        // émet la liste des cocktails (frontend)
        this.cocktails.next(cocktails);
      }
    );    
  }

  updateCocktail(updateCocktail: Cocktail): void {
    
    // copy la liste des cocktails
    const cocktails = this.cocktails.value.slice();

    // récupère le cocktail à mettre à jour
    let cocktail = cocktails.filter(
      (cocktail:Cocktail) => cocktail.id === updateCocktail.id
    )[0]

    // récupère l'index du cocktail à mettre à jour
    let index = cocktails.findIndex(c => c.id === updateCocktail.id);
    
    // met à jour le cocktail dans la liste des cocktails (frontend)
    cocktails[index] = updateCocktail;
    
    // émet la nouvelle liste de cocktail (frontend)
    this.cocktails.next(cocktails);
    
    // met à jour le cocktail via HTTP PATH (côté backend)
    const URL = "http://127.0.0.1:8000/api/v1/cocktails/" + cocktail.id + '/';
    this.http.patch(URL, updateCocktail).subscribe( res => console.log(res));
  }

  deleteCocktail(cocktail_id): void {
    
    // copy la liste des cocktails
    const cocktails = this.cocktails.value.slice();

    // récupère l'index du cocktail à supprimer
    let index = cocktails.findIndex(cocktail => cocktail.id === cocktail_id);
    
    // supprime le cocktail dont l'index vaut 'index' de la liste des cocktails (frontend)
    if (index > -1) {
      cocktails.splice(index, 1);
    }
    
    // émet la nouvelle liste de cocktails (frontend)
    this.cocktails.next(cocktails);

    // supprime le cocktail via un HTTP DELETE (backend)
    const URL = "http://127.0.0.1:8000/api/v1/cocktails/" + cocktail_id + '/';
    this.http.delete(URL).subscribe();
  }

}