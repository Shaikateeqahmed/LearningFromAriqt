import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFashionComponent } from './view-fashion.component';

describe('ViewFashionComponent', () => {
  let component: ViewFashionComponent;
  let fixture: ComponentFixture<ViewFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFashionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
