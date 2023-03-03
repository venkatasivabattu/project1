import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { pregnants } from 'src/app/models/pregnants.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewp',
  templateUrl: './viewp.component.html',
  styleUrls: ['./viewp.component.css']
})
export class ViewpComponent implements OnInit {
  search;
  aid;
  pregnants:pregnants[];
  constructor(private ds:DashboardService,private r:Router) { }

  ngOnInit() {
    this.aid=sessionStorage.getItem('aid');
    this.getAllWomen();
  }
  searchFor(){
    if(this.search.length!=0){
      const data:any={};
      data.s=this.search;
      data.a=this.aid;
      this.ds.searchForWomen(data).subscribe(
        (res)=>{
          console.log(res.result);
          this.pregnants=res.result;
          if(res.result.length==0){
            alert('No Data Found.........');
            this.search='';

          }
        },
        (err)=>{}
      );
    
    }
  }
  getAllWomen(){
    this.ds.getAllWomen(this.aid).subscribe(
      (res)=>{
        console.log(res.result);
        this.pregnants=res.result;
        if(res.result.length==0){
          alert('No Data Found.........');

        }
      },
      (err)=>{}
    );
    
  }
  update(data){
    console.log(data);
    sessionStorage.setItem('uobj',JSON.stringify(data));
    this.r.navigate(["../../home2/updatep"]);
  }
  delete(d){
    console.log(d,'delete');
    this.ds.delWomen(d).subscribe(
      (res)=>{
        if(res.del){
          console.log(res,'hiii');
          this.getAllWomen();
          alert('Record deleted successfully....');
        }
      },
      (err)=>{}
    );
  }
  enrollChild(row){
    console.log(row.puid);
    sessionStorage.setItem('obj',JSON.stringify(row));
    this.r.navigate(['/../home2/Enroll/c']);
    
  }

}
