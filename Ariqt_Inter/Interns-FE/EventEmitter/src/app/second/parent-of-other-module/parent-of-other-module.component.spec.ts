import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOfOtherModuleComponent } from './parent-of-other-module.component';

describe('ParentOfOtherModuleComponent', () => {
  let component: ParentOfOtherModuleComponent;
  let fixture: ComponentFixture<ParentOfOtherModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOfOtherModuleComponent]
    });
    fixture = TestBed.createComponent(ParentOfOtherModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
