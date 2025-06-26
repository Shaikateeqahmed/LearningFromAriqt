import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiCardTitleComponent } from './ui-card-title/ui-card-title.component';
import { UiCardBodyComponent } from './ui-card-body/ui-card-body.component';
import { UiCardFooterComponent } from './ui-card-footer/ui-card-footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiCardComponent,
    UiCardTitleComponent,
    UiCardBodyComponent,
    UiCardFooterComponent,
  ],
  exports : [
    UiCardComponent,
    UiCardTitleComponent,
    UiCardBodyComponent,
    UiCardFooterComponent,
  ]
})
export class ShareUiCardModule {}
