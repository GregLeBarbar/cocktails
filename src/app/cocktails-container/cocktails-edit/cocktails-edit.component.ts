import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktails-edit.component.html',
  styleUrls: ['./cocktails-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  public cocktail: Cocktail;
  public cocktailForm: FormGroup;
  private edit: boolean;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private formBuilder: FormBuilder, 
    private cocktailService: CocktailService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params: Params) => {
      if (params.index) {
        this.edit = true;
        this.cocktail = this.cocktailService.getCocktail(params.index);
        this.initForm(this.cocktail);
      } else {
        this.edit = false;
        this.initForm();
      }
    })
  }

  initForm(cocktail={name:'', image: '', description: '', ingredients: []}) {
    this.cocktailForm = this.formBuilder.group({
      name: [cocktail.name, Validators.required],
      image: [cocktail.image, Validators.required],
      description: [cocktail.description],
      ingredients: this.formBuilder.array(
        cocktail.ingredients.map( 
          ingredient => this.formBuilder.group(
            { name: [ingredient.name], quantity: [ingredient.quantity] }
          )
        )
      )
    })
  }

  addIngredient(): void {
    (<FormArray>this.cocktailForm.get('ingredients')).push(this.formBuilder.group({
      name: [''],
      quantity: ['']
    }));
  }

  createCocktail(){
    if (this.edit) {
      this.cocktailService.updateCocktail(this.cocktailForm.value);
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value);
    }
  }

}
