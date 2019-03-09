import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student.service';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { TeacherEntryComponent } from './teachers/teacher-entry/teacher-entry.component';
import { TeacherService } from './teacher.service';
import { BaseService } from './base.service';
import { UrlService } from './url.service';
import { NavComponent } from './nav/nav.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { CourseService } from './course.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentListComponent,
    TeacherListComponent,
    TeacherEntryComponent,
    NavComponent,
    CourseListComponent,
    AddCourseComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BaseService,
    UrlService,
    StudentService,
    TeacherService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
