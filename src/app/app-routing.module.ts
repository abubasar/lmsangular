import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { TeacherEntryComponent } from './teachers/teacher-entry/teacher-entry.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { EnrollmentEntryComponent } from './enrollments/enrollment-entry/enrollment-entry.component';
import { AddContentComponent } from './contents/add-content/add-content.component';
import { CourseContentComponent } from './courses/course-content/course-content.component';

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},

  {path:'list',component:StudentListComponent},
  {path:'student-entry',component:StudentEntryComponent},
  {path:'list-teacher',component:TeacherListComponent},
  {path:'teacher-entry',component:TeacherEntryComponent},
  {path:'all-course',component:CourseListComponent},
  {path:'course-entry',component:AddCourseComponent},
  {path:'course-detail',component:CourseContentComponent},
  {path:'enrollment-entry',component:EnrollmentEntryComponent},
  {path:'content-entry',component:AddContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
