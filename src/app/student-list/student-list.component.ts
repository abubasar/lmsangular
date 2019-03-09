import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { BaseRequestModel } from '../base-request-model';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent extends BaseComponent<Student> implements OnInit {
 

  constructor(studentService:StudentService) {
    super(studentService);
   // this.searchRequest["name"]=0;
    //this.searchRequest["phone"]=1
   
  }

  ngOnInit() {
    this.search(); 
  }

  reset() {
    console.log("not apply");
  }
}
