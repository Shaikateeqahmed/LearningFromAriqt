import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewHomeComponent } from './view-home.component';

describe('ViewHomeComponent', () => {
  let component: ViewHomeComponent;
  let fixture: ComponentFixture<ViewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
