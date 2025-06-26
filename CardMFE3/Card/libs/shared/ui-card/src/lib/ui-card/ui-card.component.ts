import { AfterContentInit, Component, ContentChild, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { UiCardHeaderComponent } from '../ui-card-header/ui-card-header.component';
import { UiCardBodyComponent } from '../ui-card-body/ui-card-body.component';
import { UiCardFooterComponent } from '../ui-card-footer/ui-card-footer.component';
import { CardBodyDirective } from '../directives/card-body.directive';
import { CardFooterDirective } from '../directives/card-footer.directive';
import { CardHeaderDirective } from '../directives/card-header.directive';

@Component({
  selector: 'lib-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.css',
})
export class UiCardComponent implements AfterContentInit {

  @ContentChildren(CardHeaderDirective) headers!: QueryList<CardHeaderDirective>;
  @ContentChildren(CardBodyDirective) bodies!: QueryList<CardBodyDirective>;
  @ContentChildren(CardFooterDirective) footers!: QueryList<CardFooterDirective>;

  ngAfterContentInit() {
    debugger
    if (this.headers.length === 0) {
      console.error('lib-ui-card-header must be used inside lib-ui-card.');
    }
    if (this.bodies.length === 0) {
      console.error('lib-ui-card-body must be used inside lib-ui-card.');
    }
    if (this.footers.length === 0) {
      console.error('lib-ui-card-footer must be used inside lib-ui-card.');
    }
  }
}
