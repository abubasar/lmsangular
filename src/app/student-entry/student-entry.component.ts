import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.scss']
})
export class StudentEntryComponent extends BaseComponent<Student> implements OnInit {


  constructor(studentService:StudentService) {
    super(studentService);
   this.model=new Student();
  }

  ngOnInit() {
  }
  /*
save(){
  this.studentService.save(this.student).subscribe(res=>{
    this.reset();
    console.log('success');
  },error=>{
    console.log(error)
  });
}
*/

reset():void{
  this.model=new Student();
}
}
