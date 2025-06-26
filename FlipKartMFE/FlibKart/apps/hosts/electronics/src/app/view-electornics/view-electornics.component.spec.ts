import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewElectornicsComponent } from './view-electornics.component';

describe('ViewElectornicsComponent', () => {
  let component: ViewElectornicsComponent;
  let fixture: ComponentFixture<ViewElectornicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewElectornicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewElectornicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
