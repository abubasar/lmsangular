
import { BaseService } from '../base.service';
import { Entity } from '../entity';
import { BaseRequestModel } from '../base-request-model';


export abstract class BaseComponent<T extends Entity>{
  model:T
  
constructor(public service:BaseService<T>){
this.model=this.createInstance(Entity) as T;
this.searchRequest=new BaseRequestModel();
this.searchRequest.page=1
this.searchRequest.orderBy="modified"
this.searchRequest.isAscending=false;
}

save(){
  this.service.save(this.model).subscribe(res=>{
    this.reset();
    console.log('success');
  },error=>{
    console.log(error)
  });
}

abstract reset();

createInstance<Entity>(c:new()=>Entity):Entity{
  return new c();
}
 //query controller start here
 
 models:T[]
searchRequest:BaseRequestModel

search(){
  this.service.search(this.searchRequest).subscribe(res=>{
    this.models=res;
    console.log(this.models);
  },error=>{
    console.log(error)
  })

}

sort(property:string){
  this.searchRequest.orderBy=property;
  this.searchRequest.isAscending=!this.searchRequest.isAscending  
  this.search();
}

previous(){
if(this.searchRequest.page>1){
this.searchRequest.page=this.searchRequest.page-1; 
this.search();
}
}

next(){
  this.searchRequest.page=this.searchRequest.page+1;
  this.search();

}
}
