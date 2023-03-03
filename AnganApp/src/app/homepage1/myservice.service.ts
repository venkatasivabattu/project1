import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
  public getAllSchemes():Observable<any>{
    return this.http.get('http://localhost:3000/allschemes');
  }
  public searchFor(q:any):Observable<any>{
    
    console.log(q);
    
    return this.http.get('http://localhost:3000/all/'+q);
  }
  public getCount():Observable<any>{
    return this.http.get('http://localhost:3000/getcount');
  }
  public authenticate(u:any):Observable<any>{
    console.log(u,'service');
    return this.http.get("http://localhost:3000/authenticate/"+u);
  }
  public getAid(wid:any):Observable<any>{
    console.log(wid,'aid f');
    return this.http.get("http://localhost:3000/getAid/"+wid);
  }
}
