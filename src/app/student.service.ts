import { Injectable, EventEmitter } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<Student> {
    constructor(http:HttpClient,url:UrlService) {
     super(http,url.student)
    }
}
