import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPrimeVedioComponent } from './view-prime-vedio.component';

describe('ViewPrimeVedioComponent', () => {
  let component: ViewPrimeVedioComponent;
  let fixture: ComponentFixture<ViewPrimeVedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPrimeVedioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPrimeVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
