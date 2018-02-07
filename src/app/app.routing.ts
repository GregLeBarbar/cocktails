import { Route, RouterModule } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component'
import { CocktailDetailComponent } from './cocktails-container/cocktails-details/cocktails-details.component';
import { CocktailEditComponent } from './cocktails-container/cocktails-edit/cocktails-edit.component';

const APP_ROUTE: Route[] = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
    { path: 'panier', component: PanierComponent },
    { 
        path: 'cocktails', 
        component: CocktailsContainerComponent, 
        children: [
            { path: '', component: CocktailDetailComponent},
            { path: 'new', component: CocktailEditComponent},
            { path: ':index', component: CocktailDetailComponent},
            { path: ':index/edit', component: CocktailEditComponent}
        ] 
    },
]

export const AppRouting = RouterModule.forRoot(APP_ROUTE)