import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductByIDComponent } from './view-product-by-id.component';

describe('ViewProductByIDComponent', () => {
  let component: ViewProductByIDComponent;
  let fixture: ComponentFixture<ViewProductByIDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProductByIDComponent]
    });
    fixture = TestBed.createComponent(ViewProductByIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
