import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewWomenComponent } from './view-women.component';

describe('ViewWomenComponent', () => {
  let component: ViewWomenComponent;
  let fixture: ComponentFixture<ViewWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewWomenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
