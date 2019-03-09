import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/teacher';
import { TeacherService } from 'src/app/teacher.service';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-teacher-entry',
  templateUrl: './teacher-entry.component.html',
  styleUrls: ['./teacher-entry.component.scss']
})
export class TeacherEntryComponent extends BaseComponent<Teacher> implements OnInit {
  

  constructor(teacherService:TeacherService) {
    super(teacherService);
    this.model=new Teacher();
   }

  ngOnInit() {
  }

  reset():void {
    this.model=new Teacher();
  }

}
