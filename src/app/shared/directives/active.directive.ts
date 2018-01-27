import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
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
