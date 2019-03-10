import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { BaseComponent } from 'src/app/base/base.component';
import { BaseRequestModel } from 'src/app/base-request-model';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }
contents:any[]
  constructor(service:ContentService) {
    super(service)
   }

  ngOnInit() {
   this.getCourseContents();
  }

  getCourseContents(): void {
    

    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.service.search(r).subscribe(res=>{
             this.contents=res;
             console.log(res)
    });
}

}
