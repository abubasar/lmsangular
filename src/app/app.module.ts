import { BrowserModule} from '@angular/platform-browser';
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
import { EnrollmentEntryComponent } from './enrollments/enrollment-entry/enrollment-entry.component';
import { AddContentComponent } from './contents/add-content/add-content.component';
import { EnrollmentService } from './enrollment.service';
import { ContentService } from './content.service';
import { CourseContentComponent } from './courses/course-content/course-content.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentListComponent,
    TeacherListComponent,
    TeacherEntryComponent,
    NavComponent,
    CourseListComponent,
    AddCourseComponent,
    EnrollmentEntryComponent,
    AddContentComponent,
    CourseContentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [
    BaseService,
    UrlService,
    StudentService,
    TeacherService,
    CourseService,
    EnrollmentService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
