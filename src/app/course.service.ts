import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Course } from './course';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends BaseService<any> {

  constructor(http:HttpClient,url:UrlService) {
    super(http,url.course)
   }

   get(id:number):Observable<any>{
    return this.http.get<any>(this.commandUrl+'/get/'+id);
}

}
