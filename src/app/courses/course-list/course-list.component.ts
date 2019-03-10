import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(public service:CourseService,private router:Router) {
    super(service)
   }
   navigate(id:number){
    this.router.navigate(['/course-detail/'+id]);
      }
  ngOnInit() {
    this.search();
  }

}
