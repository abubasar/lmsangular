import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entity } from './entity';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  commandUrl:string

  constructor(public http:HttpClient,url:string) {
    this.commandUrl=url;
   }

   save(data:Entity):Observable<any>{
     //data.id="10"
     data.created=new Date()
     data.createdBy="me"
     data.modified=new Date()
     data.modifiedBy="me"
    return  this.http.post(this.commandUrl+'/add',data);
   
  
  }

   search(request:any):Observable<any>{
   
      return this.http.post(this.commandUrl+'query/'+'search',request);
   }
}
