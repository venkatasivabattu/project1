import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { children } from 'src/app/models/children.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewc',
  templateUrl: './viewc.component.html',
  styleUrls: ['./viewc.component.css']
})
export class ViewcComponent implements OnInit {
  search;
  aid;
  cd=new Date().getFullYear();
  children:children[];
  constructor(private ds:DashboardService,private r:Router) { }

  ngOnInit() {
    this.aid=sessionStorage.getItem('aid');
    this.getAllChildren();
  }
  searchFor(){
    if(this.search.length!=0){
      const data:any={};
      data.s=this.search;
      data.a=this.aid;
      this.ds.searchForChildren(data).subscribe(
        (res)=>{
          console.log(res.result);
          this.children=res.result;
          if(res.result.length==0){
            alert('No Data Found.........');
            this.search='';

          }
          else{
            this.dobChecker();
          }
          
        },
        (err)=>{}
      );
    
    }
  }
  getAllChildren(){
    this.ds.getAllChildren(this.aid).subscribe(
      (res)=>{
        console.log(res.result);
        this.children=res.result;
        if(res.result.length==0){
          alert('No Data Found.........');

        }
        else{
          this.dobChecker();
        }
        
      },
      (err)=>{}
    );
    
  }
  update(data){
    console.log(data);
    sessionStorage.setItem('uobj',JSON.stringify(data));
    this.r.navigate(["../../home2/updatec"]);
  }
  delete(d){
    console.log(d,'delete');
    this.ds.delChildren(d).subscribe(
      (res)=>{
        if(res.del){
          console.log(res,'hiii');
          this.getAllChildren();
          alert('Record deleted successfully....');
        }
        else{
          alert('failed to delete...');
        }
      },
      (err)=>{}
    );
  }
  promote(row){
    console.log(row.cuid,'promoteee');
    const data={
        id:row.cuid
    }
    this.ds.promoteChild(data).subscribe(
      (res)=>{
        if(res.submit){
          this.getAllChildren();
          alert('promoted successfully..........');
        }
        else{
          alert("seeee");
        }
      },
      (err)=>{
        alert(err);
        console.log(err);
      }
    );
  }
  dobChecker(){
    

    for (const child of this.children) {
      
      const dob=new Date(child.cdob);
      const ageInMilliseconds = Date.now() - dob.getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      child.cage=ageInYears;
    }
    
  }

}
