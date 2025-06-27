import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfFourthComponent } from './child-of-fourth.component';

describe('ChildOfFourthComponent', () => {
  let component: ChildOfFourthComponent;
  let fixture: ComponentFixture<ChildOfFourthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOfFourthComponent]
    });
    fixture = TestBed.createComponent(ChildOfFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
