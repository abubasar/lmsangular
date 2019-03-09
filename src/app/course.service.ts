import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Course } from './course';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService<any> {

  constructor(http:HttpClient,url:UrlService) {
    super(http,url.course)
   }
}
