import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewLaptopComponent } from './view-laptop.component';

describe('ViewLaptopComponent', () => {
  let component: ViewLaptopComponent;
  let fixture: ComponentFixture<ViewLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLaptopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
