import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  public getCount(aid:any):Observable<any>{
    return this.http.get("http://localhost:3000/dscounter/"+aid);
  }
  public postWomen(data):Observable<any>{
    console.log(data);
    return this.http.post("http://localhost:3000/postWomen",data);
  }
  public postChild(data):Observable<any>{
    console.log(data);
    return this.http.post("http://localhost:3000/postChild",data);
  }
  public searchForWomen(data:any):Observable<any>{
    console.log(data);
    return this.http.get("http://localhost:3000/searchWomen",{ params: data});
  }
  public getAllWomen(aid):Observable<any>{
    console.log(aid);
    return this.http.get("http://localhost:3000/getAllWomen/"+aid);
  }
  public delWomen(id):Observable<any>{
    console.log(id);
    return this.http.delete("http://localhost:3000/delWomen/"+id);
  }
  public updateWomen(data:any):Observable<any>{
    console.log(data,'updation');
    return this.http.put("http://localhost:3000/updateWomen",data);
  }

  public searchForChildren(data:any):Observable<any>{
    console.log(data);
    return this.http.get("http://localhost:3000/searchChildren",{ params: data});
  }
  public getAllChildren(aid):Observable<any>{
    console.log(aid);
    return this.http.get("http://localhost:3000/getAllChildren/"+aid);
  }
  public delChildren(id):Observable<any>{
    console.log(id);
    return this.http.delete("http://localhost:3000/delChildren/"+id);
  }
  public updateChildren(data:any):Observable<any>{
    console.log(data,'updation');
    return this.http.put("http://localhost:3000/updateChildren",data);
  }
  public promoteChild(data:any):Observable<any>{
    console.log(data,'promotion');
    return this.http.put("http://localhost:3000/promoteChildren",data);
  }
  
}
