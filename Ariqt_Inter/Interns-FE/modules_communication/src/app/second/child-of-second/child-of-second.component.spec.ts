import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfSecondComponent } from './child-of-second.component';

describe('ChildOfSecondComponent', () => {
  let component: ChildOfSecondComponent;
  let fixture: ComponentFixture<ChildOfSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOfSecondComponent]
    });
    fixture = TestBed.createComponent(ChildOfSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
