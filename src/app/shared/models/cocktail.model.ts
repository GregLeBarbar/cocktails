import { Ingredient } from './ingredient.model';

export class Cocktail {
    constructor(
        public name: string, 
        public image: string, 
        public description: string,
        public ingredients?: Ingredient[]) {}
}
