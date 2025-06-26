import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { UiCardBodyComponent, UiCardFooterComponent, UiCardHeaderComponent } from 'shared-ui-card';

@Component({
  selector: 'lib-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.css',
})
export class UiCardComponent {

  @ViewChild('lib-ui-card-header')
  Header!: HTMLElement;
    @ContentChild('header', {static : true}) header! : TemplateRef<UiCardHeaderComponent>;
    @ContentChild('body', {static : true}) body! : TemplateRef<UiCardBodyComponent>;
    @ContentChild('footer', {static : true}) footer! : TemplateRef<UiCardFooterComponent>;
}
