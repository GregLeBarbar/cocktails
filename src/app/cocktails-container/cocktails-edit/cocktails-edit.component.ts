import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';


@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktails-edit.component.html'
})
export class CocktailEditComponent implements OnInit {

  public cocktail: Cocktail;
  public cocktailForm: FormGroup;
  private edit: boolean;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private cocktailService: CocktailService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( 
      (params: Params) => {
        if (params.index) {
          // Si l'URL possède un id alors édition d'un cocktail
          this.edit = true;
          this.cocktailService.getCocktail(params.index).subscribe( (cocktail: Cocktail) => {
            this.cocktail = cocktail;
            this.initForm(this.cocktail);
          });
        } else {
          // Si l'URL ne possède pas d'id alors création d'un cocktail
          this.edit = false;
          this.initForm();
        }
      }
    )
  }

  // Permet de :
  // - soit d'initialiser un formulaire vide en cas d'ajout d'un nouveau cocktail
  //   dans ce cas, les valeurs par défaut des paramètres sont utilisées
  // - soit de charger les données d'un cocktail en cas d'édition d'un cocktail
  initForm(cocktail={id:'', name:'', image: '', description: '', ingredients: []}): void {
    this.cocktailForm = this.formBuilder.group({
      id: [cocktail.id],
      name: [cocktail.name, Validators.required],
      image: [cocktail.image, Validators.required],
      description: [cocktail.description],

      // FIXME: j'ai défini des validateurs pour le name et la quantity des ingredients
      // name: [ingredient.name, Validators.required], 
      // quantity: [ingredient.quantity, Validators.required] 
      // le but est que le bouton sauvegarder ne soit pas actif si un champ est vide
      // mais cela ne fonctionne pas.
      ingredients: this.formBuilder.array(
        cocktail.ingredients.map( 
          ingredient => this.formBuilder.group({ 
            name: [ingredient.name], 
            quantity: [ingredient.quantity] 
          })
        )
      )
    })
  }

  // permet d'ajouter dynamiquement les 2 champs d'un ingrédient au formulaire
  addIngredient(): void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(
      this.formBuilder.group({
        name: [''],
        quantity: ['']
      })
    );
  }

  // permet de soit mettre à jour le cocktail soit ajouter un nouveau cocktail
  createOrUpdateCocktail(): void{
    if (this.edit) {
      this.cocktailService.updateCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
  }
}