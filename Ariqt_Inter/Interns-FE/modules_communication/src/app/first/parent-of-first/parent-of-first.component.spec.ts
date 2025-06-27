import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfFirstComponent } from './parent-of-first.component';

describe('ParentOfFirstComponent', () => {
  let component: ParentOfFirstComponent;
  let fixture: ComponentFixture<ParentOfFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOfFirstComponent]
    });
    fixture = TestBed.createComponent(ParentOfFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
