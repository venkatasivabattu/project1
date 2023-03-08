import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  constructor(private http:HttpClient) { }
  public getCategories():Observable<any>{
    return this.http.get('http://localhost:3000/getCategories')
  }

  public getPregnants(aid):Observable<any>{
    return this.http.get('http://localhost:3000/getPregnants/'+aid);
  }

  public getDelivered(aid):Observable<any>{
    return this.http.get('http://localhost:3000/getDelivered/'+aid);
  }

  public getChildren(aid):Observable<any>{
    return this.http.get('http://localhost:3000/getAllChildren/'+aid);
  }
}
