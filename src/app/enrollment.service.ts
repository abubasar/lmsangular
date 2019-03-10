import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { Entity } from 'lmsangular/src/app/entity';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService extends BaseService<any> {
  baseUrl:string="http://localhost:14189/api/enrollment/add";
  constructor(http:HttpClient,url:UrlService){
    super(http,url.enrollment)
  }

  add(model:Entity):Observable<any>{
    model.created=new Date()
     model.createdBy="me"
     model.modified=new Date()
     model.modifiedBy="me"
    return this.http.post<any>(this.baseUrl,model);
  }
}
