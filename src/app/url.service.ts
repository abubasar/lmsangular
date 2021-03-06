import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
baseUrl:string="http://localhost:14189/api/"
teacher:string
student:string
course:string
content:string
enrollment:string
  constructor() { 
    this.teacher=this.baseUrl+"teacher"
    this.student=this.baseUrl+"student"
    this.course=this.baseUrl+"course"
    this.content=this.baseUrl+"content"
    this.enrollment=this.enrollment+"enrollment"
  }
}
