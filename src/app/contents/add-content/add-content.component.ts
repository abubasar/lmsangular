import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'lmsangular/src/app/base/base.component';
import { Entity } from 'src/app/entity';
import { ContentService } from 'src/app/content.service';
import { BaseRequestModel } from 'src/app/base-request-model';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent extends BaseComponent<any> implements OnInit {
  reset() {
   this.model=new Entity();
  }
courses:any[]
  constructor(service:ContentService,private courseService:CourseService) {
    super(service);
   }

  ngOnInit() {
    this.loadCourses()
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


}
