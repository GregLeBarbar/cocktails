import { NgModule } from '@angular/core'; // pour le decorateur @NgModule
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { cocktailRouting } from './cocktail.routing';

import { CocktailEditComponent } from './cocktails-edit/cocktails-edit.component';
import { CocktailsContainerComponent } from './cocktails-container.component';
import { CocktailListComponent } from './cocktails-list/cocktails-list.component';
import { CocktailDetailComponent } from './cocktails-details/cocktails-details.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@NgModule({
    declarations:[
        CocktailsContainerComponent,
        CocktailListComponent,
        CocktailDetailComponent,
        CocktailEditComponent,
        FilterPipe,
    ],
    imports:[
        CommonModule, // pour les fonctionnalités de base ngif, ngfor
        FormsModule, // pour pouvoir utiliser ngModel (dans notre cas) mais aussi les forms template driven (que l'on utilise pas)
        ReactiveFormsModule, // pour la gestion des formulaires data-driven
        RouterModule, // pour routerLink routerLinkActive
        cocktailRouting // les routes du feature module: cocktail module
    ],
    providers:[],
    exports:[]
})
export class CocktailModule {}