import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiCardHeaderComponent } from './ui-card-header/ui-card-header.component';
import { UiCardBodyComponent } from './ui-card-body/ui-card-body.component';
import { UiCardFooterComponent } from './ui-card-footer/ui-card-footer.component';
import { CardBodyDirective } from './directives/card-body.directive';
import { CardFooterDirective } from './directives/card-footer.directive';
import { CardHeaderDirective } from './directives/card-header.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardBodyComponent,
    UiCardFooterComponent,
    CardHeaderDirective,
    CardBodyDirective,
    CardFooterDirective
  ],
  exports : [
    UiCardComponent,
    UiCardHeaderComponent,
    UiCardBodyComponent,
    UiCardFooterComponent,
  ]
})
export class UiCardModule {}
