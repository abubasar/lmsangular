import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { CourseService } from 'src/app/course.service';
import { Course } from 'src/app/course';
import { TeacherService } from 'src/app/teacher.service';
import { BaseRequestModel } from 'src/app/base-request-model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent extends BaseComponent<any> implements OnInit {
  reset() {
   this.model=new Course();
  }
teachers:any[]
  constructor(public service:CourseService,private teacherService:TeacherService) {
    super(service)
   }

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers(){
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.teacherService.search(r).subscribe(res=>{
             this.teachers=res;
             console.log(res)
    });
  }

}
