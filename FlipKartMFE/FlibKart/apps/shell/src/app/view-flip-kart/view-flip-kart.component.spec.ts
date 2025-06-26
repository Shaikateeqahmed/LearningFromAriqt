import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFlipKartComponent } from './view-flip-kart.component';

describe('ViewFlipKartComponent', () => {
  let component: ViewFlipKartComponent;
  let fixture: ComponentFixture<ViewFlipKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFlipKartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFlipKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
