import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studentResult : string = ""
ngOnInit():void{
  this.saveData();
}
calculate(num1 : number, num2 :number):number{
  return num1 + num2;
}

saveData(){
  console.log(this.calculate(10,20));
  // this.studentResult();
}
studentSchoolResult(){
  if(this.calculate(10,20)>=40){
    this.studentResult = 'Pass'
    return this.studentResult;
  }else{
    this.studentResult = 'Fail'
    return this.studentResult;
  }
}
}
