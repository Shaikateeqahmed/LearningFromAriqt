import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigButtonComponent } from './config-button.component';

describe('ConfigButtonComponent', () => {
  let component: ConfigButtonComponent;
  let fixture: ComponentFixture<ConfigButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
