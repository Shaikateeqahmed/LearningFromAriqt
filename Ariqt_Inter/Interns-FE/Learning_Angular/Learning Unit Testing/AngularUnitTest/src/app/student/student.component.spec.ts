import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let h1 : HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent]
    });
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('SpyOn Method',()=>{
  //   spyOn(component,'calculate');
  //   component.saveData();
  //   expect(component.calculate).toHaveBeenCalled();
  // })
  // it('SpyOn Method ex-2',()=>{
  //   spyOn(component,'calculate').and.returnValues(40,20);
  //   let result = component.studentResult();
  //   expect(result).toEqual('Pass');
  // })

  it('Detect Changes',()=>{
    component.studentSchoolResult();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.studentResult);
  })
});
