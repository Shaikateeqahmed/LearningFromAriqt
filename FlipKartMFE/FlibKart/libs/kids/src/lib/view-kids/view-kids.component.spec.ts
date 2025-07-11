import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewKidsComponent } from './view-kids.component';

describe('ViewKidsComponent', () => {
  let component: ViewKidsComponent;
  let fixture: ComponentFixture<ViewKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewKidsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
