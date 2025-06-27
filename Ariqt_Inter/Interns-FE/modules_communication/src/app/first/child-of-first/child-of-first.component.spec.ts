import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOfFirstComponent } from './child-of-first.component';

describe('ChildOfFirstComponent', () => {
  let component: ChildOfFirstComponent;
  let fixture: ComponentFixture<ChildOfFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildOfFirstComponent]
    });
    fixture = TestBed.createComponent(ChildOfFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
