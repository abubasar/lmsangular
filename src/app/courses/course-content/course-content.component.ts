import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { BaseComponent } from 'src/app/base/base.component';
import { BaseRequestModel } from 'src/app/base-request-model';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
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
courseTitle:string
url;

  constructor(service:ContentService,private sanitizer:DomSanitizer) {
    super(service)
   }

  ngOnInit() {
   this.getCourseContents();
   
  }
activeContent={}
  getCourseContents(): void {
    var r=new BaseRequestModel();
    r.page=-1;
    r.orderBy="createdBy"
    this.service.search(r).subscribe(res=>{
      console.log(res)
             
             this.contents=res;
            
             this.courseTitle=this.contents[0].title
              this.url= this.sanitizer.bypassSecurityTrustResourceUrl(this.contents[0].url);
             
            
    });
}




}
