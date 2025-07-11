import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByDateComponent } from './view-product-by-date.component';

describe('ViewProductByDateComponent', () => {
  let component: ViewProductByDateComponent;
  let fixture: ComponentFixture<ViewProductByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductByDateComponent]
    });
    fixture = TestBed.createComponent(ViewProductByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
