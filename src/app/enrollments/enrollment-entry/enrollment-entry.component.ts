import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/enrollment.service';
import { StudentService } from 'src/app/student.service';
import { CourseService } from 'src/app/course.service';
import { Entity } from 'src/app/entity';
import { BaseRequestModel } from 'src/app/base-request-model';
import { Enrollment } from 'src/app/enrollment';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-enrollment-entry',
  templateUrl: './enrollment-entry.component.html',
  styleUrls: ['./enrollment-entry.component.scss']
})
export class EnrollmentEntryComponent extends BaseComponent<any> implements OnInit {
 

  reset() {
    this.model=new Enrollment();
   }
 students:any[]
 courses:any[]
 //selectedCoursePrice:any
   constructor(public service:EnrollmentService,private studentService:StudentService,private courseService:CourseService) {
     super(service);
     this.searchRequest.orderBy="modified"
    }
 
   ngOnInit() {
     this.loadStudents();
     this.loadCourses();
   }
 
   loadStudents(){
     var r=new BaseRequestModel();
     r.page=-1;
     r.orderBy="modified"
     this.studentService.search(r).subscribe(res=>{
              this.students=res;
              console.log(res)
     });
   }
 
   loadCourses(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="modified"
    this.courseService.search(r).subscribe(res=>{
             this.courses=res;
             console.log(res)
    });
  }

  addEnrollment() {

   this.model.due=0;
  //  this.model.due = (this.courseService..price <= this.model.paidTotal)
     //   ? 0
      //  : (this.model.price - this.model.paidTotal);
    this.model.isPaid = (this.model.due <= 0) ? true : false;
    this.model.isCompleted = false;
    this.model.completedContent = 0;
    this.service.add(this.model).subscribe(res=>{ 
      this.reset();
      console.log('success');
    },error=>{
      console.log(error)
    }

    );
}
}
