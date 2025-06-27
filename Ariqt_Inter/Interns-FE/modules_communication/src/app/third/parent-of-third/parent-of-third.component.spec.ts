import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfThirdComponent } from './parent-of-third.component';

describe('ParentOfThirdComponent', () => {
  let component: ParentOfThirdComponent;
  let fixture: ComponentFixture<ParentOfThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOfThirdComponent]
    });
    fixture = TestBed.createComponent(ParentOfThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
