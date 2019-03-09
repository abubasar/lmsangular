import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/teacher.service';
import { BaseRequestModel } from 'src/app/base-request-model';
import { BaseComponent } from 'src/app/base/base.component';
import { Teacher } from 'src/app/teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent extends BaseComponent<Teacher> implements OnInit {
  
  
    constructor(teacherService:TeacherService) {
      super(teacherService);
     
    }
  
    ngOnInit() {
      this.search(); 
    }
  
    reset() {
      throw new Error("Method not implemented.");
    }
  
  }
  