import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewGamingComponent } from './view-gaming.component';

describe('ViewGamingComponent', () => {
  let component: ViewGamingComponent;
  let fixture: ComponentFixture<ViewGamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGamingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
