import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public activeCocktail: number = 0;
  cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe( (cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    })
  }

  pickCocktail(index: number):void {
    this.activeCocktail = index;
    this.cocktailService.selectCocktail(index);
  }

}
