import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends BaseService<any> {

  constructor(http:HttpClient,url:UrlService) {
    super(http,url.content)
   }
}
