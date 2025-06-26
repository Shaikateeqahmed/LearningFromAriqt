import { Component, ContentChild, TemplateRef } from '@angular/core';
import { UiCardHeaderComponent } from '../ui-card-header/ui-card-header.component';
import { UiCardBodyComponent } from '../ui-card-body/ui-card-body.component';
import { UiCardFooterComponent } from '../ui-card-footer/ui-card-footer.component';

@Component({
  selector: 'lib-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.css',
})
export class UiCardComponent {

  @ContentChild('header', {static: true}) header! : TemplateRef<UiCardHeaderComponent>
  @ContentChild('body', {static: true}) body! : TemplateRef<UiCardBodyComponent>
  @ContentChild('footer', {static: true}) footer! : TemplateRef<UiCardFooterComponent>

}
