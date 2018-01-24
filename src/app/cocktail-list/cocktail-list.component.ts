import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail("Mojito", "", ""),
    new Cocktail("Margarita", "", ""),
    new Cocktail("Sour", "", ""),
  ];

  constructor() { }

  ngOnInit() {
  }

}
