import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {
  

  constructor(private http:HttpClient) { }
  public getAllVacDetails():Observable<any>{
    return this.http.get("http://localhost:3000/getAllVacDetails");
  }

  
  public checkforVaccination(data):Observable<any>{
    return this.http.get("http://localhost:3000/checkforVaccination/",{params:data});

  }
  public postVaccination(data):Observable<any>{
    
    return this.http.post("http://localhost:3000/postVaccination",data);
  }


  public getFvaccines(vfor):Observable<any>{
    
    return this.http.get("http://localhost:3000/getFvaccines",{params:vfor});
  }
  public getFdosages(v):Observable<any>{
    console.log(v);
    return this.http.get("http://localhost:3000/getFdosages/"+v);
  }
  public getVaccinations(data):Observable<any>{
    
    return this.http.get("http://localhost:3000/getVaccinations",{params:data});
  }

  public markVaccination(data):Observable<any>{
    console.log(data);
    return this.http.put("http://localhost:3000/markVaccination",{params:data});
  }
  


  //view vaccine related servicee
  public getVaccine_Dosage(id):Observable<any>{
    console.log(id,'viewV')
    return this.http.get("http://localhost:3000/getVaccine_Dosage/"+id);
  }
}