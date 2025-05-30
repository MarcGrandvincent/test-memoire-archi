import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-title',
  template: `<h1><ng-content></ng-content></h1>`
})
export class TitleComponent {}
