import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewMenComponent } from './view-men.component';

describe('ViewMenComponent', () => {
  let component: ViewMenComponent;
  let fixture: ComponentFixture<ViewMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
