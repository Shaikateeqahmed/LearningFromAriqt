import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewECommerceComponent } from './view-e-commerce.component';

describe('ViewECommerceComponent', () => {
  let component: ViewECommerceComponent;
  let fixture: ComponentFixture<ViewECommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewECommerceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewECommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
