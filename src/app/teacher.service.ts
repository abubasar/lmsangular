import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends BaseService<Teacher> {
      constructor(url:UrlService ,http:HttpClient) {
       super(http,url.teacher)
      }
 
  }