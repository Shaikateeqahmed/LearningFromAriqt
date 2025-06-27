import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './Calculator';

// describe('AppComponent', () => {

//   let component = new AppComponent();

//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [RouterTestingModule],
//     declarations: [AppComponent]
//   }));

//   // it('should create the app', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.componentInstance;
//   //   expect(app).toBeTruthy();
//   // });

//   // it(`should have as title 'AngularUnitTest'`, () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   const app = fixture.componentInstance;
//   //   expect(app.title).toEqual('AngularUnitTest');
//   // });

//   // it('should render title', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.nativeElement as HTMLElement;
//   //   expect(compiled.querySelector('.content span')?.textContent).toContain('AngularUnitTest app is running!');
//   // });

//   // it('My Testcase',()=>{
//   //   expect(true).toBe(true);
//   // })
//   // it('Show Msg', ()=>{
//   //   expect(component.ShowMessage('Hello')).toBe('Hello');
//   // })
//   // it('Add 2 numbers',()=>{
//   //   expect(Addition(10,20)).toBe(30);
//   // })
//   // it('Tobe and Toequal',()=>{
//   //   let a = "1";
//   //   let b = "1";
//   //   expect(a).toBe(b);
//   //   expect(a).toEqual(b);
//   // })
//   // it('Tobe and Toequal',()=>{
//   //   // let a = true;
//   //   // expect(a).toBeTrue();
//   //   // let a = false;
//   //   // expect(a).toBeFalse();
//   //   // expect(null).toBeFalsy();
//   //   let a = 5; 
//   //   // expect(a).toBeGreaterThan(4);
//   //   // expect(a).toBeGreaterThan(5);
//   //   // expect(a).toBeGreaterThan(6);
//   //   // expect(a).toBeGreaterThanOrEqual(6);
//   //   // expect(a).toBeGreaterThanOrEqual(5);
//   //   // expect(a).toBeGreaterThanOrEqual(4);
//   // })
//   // it('ToMatch',()=>{
//   //   let a = 'Shaik Ateeq Ahmed';
//   //   expect(a).toMatch(/Shaik/i);
//   // })
//   // it('toBeCloseTo',()=>{
//   //   var pi = 3.12545613, e = 2.78;
//   //   expect(pi).not.toBeCloseTo(e);
//   //   expect(pi).toBeCloseTo(e,0);
//   //   expect(4.3526).toBeCloseTo(4.35,2);
//   //   expect(4.3526).toBeCloseTo(4.32,2);
//   //   expect(4.3526).not.toBeCloseTo(4.35,3);
//   // })
//   // it('toBeDefined',()=>{
//   //   let MyObj = {
//   //     foo : 'Foo'
//   //   }
//   //   let MyFun = (function(){})();
//   //   let strUndefined;
//   //   expect("Shaik").toBeDefined();
//   //   expect(MyObj).toBeDefined();
//   //   expect(MyObj.foo).toBeDefined();
//   //   // expect(MyFun).toBeDefined();
//   //   // expect(strUndefined).toBeDefined();
//   // })
//   // it('toBeNull',()=>{
//   //   let Value = null;
//   //   let setValue;
//   //   let notNull = 'Shaik';
//   //   expect(null).toBeNull();
//   //   expect(Value).toBeNull();
//   //   // expect(setValue).toBeNull();
//   //   // expect(notNull).toBeNull();
//   // })
//   // it('toContain', () => {
//   //   let MyArray = ['a', 'b', 'c'];
//   //   expect([1, 2, 3]).toContain(2);
//   //   expect([1, 2, 3]).toContain(2, 3);
//   //   // expect([1,2,3]).toContain(4);
//   //   expect(MyArray).toContain('a');
//   //   // expect(MyArray).toContain('dot');
//   //   expect([1, 2, 3]).toContain(2);
//   //   // expect(MyArray).toContain('a','d');
//   // })
//   // it('toBeUndefined',()=>{
//   //          expect(0/0).toBeNaN();
//   //          expect(0/5).toBeNaN();
//   // })
//   // 
//   it('toBeNegativeInfinity',()=>{
//     expect(-1/0).toBeNegativeInfinity();
//   })
// });


// describe('Appcomponent',()=>{
//  var comp : AppComponent;
//  beforeAll(()=>{
//   console.log('Before All');
//  })
//  afterAll(()=>{
//   console.log('After All');
//  })
//   beforeEach(()=>{
//     // console.log("Before Each");
//     comp = new AppComponent();
//   }) 
//   afterEach(()=>{
//     // console.log("After Each");
//   }) 
//   it('Increase Count', ()=>{
//     expect(comp.count+1).toEqual(comp.IncreaseCount(1));
//   })
//   it('Decrease Count', ()=>{
//     expect(comp.count-1).toEqual(comp.DecreaseCount(1));
//   })
// })


// describe('AppComponent',()=>{

//   it('AppComponent',()=>{

//     //Arrange
//     let comp = new AppComponent();
    
//     //Act
//     let msg = comp.ShowMessage('Shaik');

//     //Assert
//     expect(msg).toBe('Shaik');
//   })
// })