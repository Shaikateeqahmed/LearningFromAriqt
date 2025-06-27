import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfThirdComponent } from './child-of-third.component';

describe('ChildOfThirdComponent', () => {
  let component: ChildOfThirdComponent;
  let fixture: ComponentFixture<ChildOfThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOfThirdComponent]
    });
    fixture = TestBed.createComponent(ChildOfThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
