import { RouterModule, Route } from '@angular/router';

import { CocktailsContainerComponent } from './cocktails-container.component'
import { CocktailDetailComponent } from './cocktails-details/cocktails-details.component';
import { CocktailEditComponent } from './cocktails-edit/cocktails-edit.component';

const COCKTAIL_ROUTES: Route[] = [{ 
    path: 'cocktails', 
    component: CocktailsContainerComponent, 
    children: [
        { path: '', component: CocktailDetailComponent},
        { path: 'new', component: CocktailEditComponent},
        { path: ':index', component: CocktailDetailComponent},
        { path: ':index/edit', component: CocktailEditComponent}
    ] 
}]

export const cocktailRouting = RouterModule.forChild(COCKTAIL_ROUTES)