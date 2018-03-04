/** 
 * Cette directive n'est plus utilisée depuis la mise en place des routes.
 * Pour donner la couleur bleu au cocktail sélectionné dans la liste
 * c'est simplement routerLinkActive="active" qui fait le job cad
 * en ajoutant la class css active bootstrap ajoute la couleur background bleu et color white.
 */

import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  // cette directive s'applique sur un élément HTML ayant 
  // l'attribut appActive
  selector: '[appActive]'
})
export class ActiveDirective {

  @Input('appActive') isActive: boolean;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor() { }

  ngOnChanges() {
    if (this.isActive) {
        this.backgroundColor = '#3498db';
        this.color = 'white';
    } else {
      this.backgroundColor = 'transparent';
      this.color = 'black';
    }   
  }
}